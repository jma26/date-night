import React, { Component } from 'react';
import '../../css/Header.css';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
          <Navbar variant="dark" fixed="top" expand="lg" className={this.props.isTop ? 'navbar--fixed' : 'navbar--scroll'}>
            <Container>
              <Navbar.Brand href="#home" onClick={this.props.onScrollToTop} >DateNight</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-toggler" />
              <Navbar.Collapse id="navbar-toggler">
                <Nav className="ml-auto">
                  {/* <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link> */}
                  <Link to="/contact" className="nav-link nav-link__contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    )
  }
}

export default Header;
