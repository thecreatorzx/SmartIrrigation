import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <h1 className="hero-title">Smart Irrigation System</h1>
        <p className="hero-subtitle">
          Optimize Water Usage & Enhance Crop Yield
        </p>
        <Button variant="primary" href="#description">
          Learn More
        </Button>
      </Container>
    </section>
  );
};

export default Home;
