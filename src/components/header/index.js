import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className = 'navbar-brand' to="/">Admin Dashboard</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <li className = 'nav-item'>
                <NavLink className = 'nav-link' to="/signup">SignUp</NavLink>
              </li>
              <li className = 'nav-item'>
                <NavLink className = 'nav-link' to="/signin">SignIn</NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
