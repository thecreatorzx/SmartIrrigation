import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Background from "./Background";
import Description from "./Description";
import Solution from "./Solution";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);
  const switchToSignup = () => {
    closeLogin();
    openSignup();
  };

  const switchToLogin = () => {
    closeSignup();
    openLogin();
  };
  return (
    <div>
      <Navbar openLogin={openLogin} openSignup={openSignup} />
      <Home />
      <Background />
      <Description />
      <Solution />
      <Contact />
      <Footer />
      <LoginForm
        isOpen={isLoginOpen}
        closePopup={closeLogin}
        switchToSignup={switchToSignup}
      />
      <SignupForm
        isOpen={isSignupOpen}
        closePopup={closeSignup}
        switchToLogin={switchToLogin}
      />
    </div>
  );
};

export default LandingPage;
