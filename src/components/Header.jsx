import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`transition-all duration-300 ${scrolled ? 'bg-dark-rgba shadow-lg' : 'bg-transparent'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--accent-violet)' : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container>
        <Navbar.Brand href="#hero">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="Vision Mate Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'features', 'documents', 'milestones', 'team', 'contact'].map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item === 'home' ? 'hero' : item}`}
                className="text-white mx-2 nav-link-custom capitalize"
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <InputGroup size="sm">
              <Form.Control
                placeholder="Search..."
                aria-label="Search"
                className="bg-dark text-white border-violet"
              />
              <InputGroup.Text className="bg-violet text-white border-violet">
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
