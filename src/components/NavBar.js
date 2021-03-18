import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Instagram, Facebook, Whatsapp, GeoAlt } from 'react-bootstrap-icons';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Styles = styled.div`
  .navbar img {
    width: 98px;
  }
`;

export default function NavBar() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img className="navbar-logo" alt="logo" src={Logo} href="#home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              variant="dark"
              title="Procedimentos"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item variant="dark" href="#action/3.1">
                Micropigmentação Labial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Extensão de Cílios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Microbliding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Design de Sobrancelhas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <NavDropdown title="Cursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Micropigmentação Labial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Extensão de Cílios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Microbliding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Design de Sobrancelhas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.instagram.com/fabrinemacedobeautyartist/"
              target="_blank"
            >
              <Instagram />
            </Nav.Link>
            <Nav.Link href="https://wa.me/5511970433870" target="_blank">
              <Whatsapp />
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/fabrinemacedobeautyartist"
              target="_blank"
            >
              <Facebook />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/fabrinemacedobeautyartist/"
              target="_blank"
            >
              <GeoAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
