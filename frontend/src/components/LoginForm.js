import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import Popup from "./Popup";

const LoginForm = ({ isOpen, closePopup, switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    // Firebase login logic
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential);
        // Optionally, you can reset the form after successful login
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        // Handle Firebase errors
        if (error.code === "auth/wrong-password") {
          setError("Incorrect password.");
        } else if (error.code === "auth/user-not-found") {
          setError("No user found with this email.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email address.");
        } else {
          setError("Login failed. Please try again.");
        }
      });
  };

  return (
    <Popup isOpen={isOpen} closePopup={closePopup}>
      <h2>Login</h2>
      <form className="login" onSubmit={handleSubmit}>
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
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span onClick={switchToSignup} className="switch-link">
          Sign up here
        </span>
      </p>
    </Popup>
  );
};

export default LoginForm;
