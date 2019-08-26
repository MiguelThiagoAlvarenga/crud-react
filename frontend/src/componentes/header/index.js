import React, { Component } from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import "./index.css";

class HeaderApp extends Component {
  render = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Pagina Inicial</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/alunos">Alunos</NavDropdown.Item>
              <NavDropdown.Item href="/professores" disabled>Professores</NavDropdown.Item>
              <NavDropdown.Item href="/disciplinas" disabled>Disciplinas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/extras" disabled>Extra Currículares</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} disabled>
              Primeio site em React.js
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default HeaderApp;
