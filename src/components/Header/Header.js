import React, { Component } from 'react';
import '../../css/Header.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <Container className="header__container">
          <Navbar variant="dark" fixed="top" expand="lg">
            <Navbar.Brand href="#home">DateNight</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggler" />
            <Navbar.Collapse id="navbar-toggler">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header;
