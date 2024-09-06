import React from "react";
import { Container } from "react-bootstrap";

const Description = () => {
  return (
    <section id="description" className="section-padding">
      <div className="imgx3"></div>
      <Container>
        <h2>Smart Irrigation: The Future of Farming</h2>
        <p>
          Develop a smart irrigation system that utilizes sensors and IoT
          technology to monitor soil moisture levels and weather conditions.
          This system will provide real-time data to farmers, enabling them to
          make informed decisions on irrigation scheduling, thus optimizing
          water usage and enhancing crop yield.
        </p>
      </Container>
    </section>
  );
};

export default Description;
