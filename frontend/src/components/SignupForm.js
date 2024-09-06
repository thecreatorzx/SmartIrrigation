import React, { useState } from "react";
import Popup from "./Popup";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = ({ isOpen, closePopup, switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState(""); // State for handling errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message before form submission

    // Password confirmation check
    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Firebase signup logic
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential);
        // Optionally, you can reset the form after successful signup
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
      })
      .catch((err) => {
        // Handle Firebase errors
        if (err.code === "auth/email-already-in-use") {
          setError("Email is already in use.");
        } else if (err.code === "auth/invalid-email") {
          setError("Invalid email address.");
        } else if (err.code === "auth/weak-password") {
          setError("Password should be at least 6 characters.");
        } else {
          setError("Signup failed. Please try again.");
        }
      });
  };

  return (
    <Popup className="signpop" isOpen={isOpen} closePopup={closePopup}>
      <h2>Sign Up</h2>
      <form className="signUp" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <span onClick={switchToLogin} className="switch-link">
          Login here
        </span>
      </p>
    </Popup>
  );
};

export default SignupForm;
