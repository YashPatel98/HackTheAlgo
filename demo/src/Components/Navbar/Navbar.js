import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark">
      <img
        alt=""
        src={require("./icon.png")}
        className="d-inline-block align-top"
        height="20"
        width="40"
      />{'  '}
      &nbsp;&nbsp;
      <Navbar.Brand href="/">HackTheAlgo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        <Nav.Link href="/Algorithms">Algorithms</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
