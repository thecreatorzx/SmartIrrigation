import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Solution = () => {
  return (
    <section id="solution" className="section-padding">
      <Container>
        <h2 className="text-center">Expected Solution</h2>
        <Row>
          <Col md={4}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Sensor Integration</Card.Title>
                <Card.Text>
                  Integrate moisture sensors to monitor soil conditions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Real-time Data</Card.Title>
                <Card.Text>
                  Provide real-time data to farmers through a mobile/web app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Irrigation Alerts</Card.Title>
                <Card.Text>
                  Send timely irrigation alerts and recommendations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solution;
