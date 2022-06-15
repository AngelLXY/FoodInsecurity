import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sitelogo from "./../Assets/Sitelogo.svg";

export default function Header() {
  return (
    // <Container fluid className=" bg-dark text-white" style={{ "height": "80px" }}>
    <>
      <Navbar
        bg="dark"
        expand="lg"
        className="position-fixed w-100 shadow"
        style={{ zIndex: "9999", overflowX: "hidden" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className=" fs-3 text-white logo">
            <img src={Sitelogo} className=" me-3" style={{width:"50px"}}/>Food Insecurity
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="text-white text-decoration-none m-2">
                Home
              </Link>
              <Link
                to={"/more"}
                className="text-white text-decoration-none m-2"
              >
                To Know More
              </Link>
              <Link to={"/Donation"} className="text-white text-decoration-none m-2">
                Donation
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-white">
                <NavDropdown.Item href="#action/3.1" className="text-white">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="text-white">
                  Another action
                </NavDropdown.Item>
                <NavDropdownk.Item href="#action/3.3" className="text-white">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="text-white">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        bg="dark"
        expand="lg"
        className="w-100"
        style={{ overflowX: "hidden", height: "80px" }}
      >
        {/* <Container>
          <Navbar.Brand href="#home" className=" fs-3">
            Food Insecurity
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
        {/* </Nav>
          </Navbar.Collapse>
        </Container> */}
      </Navbar>
    </>
    // </Container>
  );
}
