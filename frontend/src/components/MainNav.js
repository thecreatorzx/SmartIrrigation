import React from "react";
import { GoPersonFill } from "react-icons/go";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ImExit } from "react-icons/im";
import { auth } from "../auth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const MainNav = ({ openLogin, openSignup }) => {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out!!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Navbar expand="lg" className="mainnav navbar">
      <Container>
        <Navbar.Brand href="#">Smart Irrigation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => userSignOut()}>
              <ImExit />
              SignOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
