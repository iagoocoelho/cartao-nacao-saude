import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "assets/img/logo-cartao-saude.png";
import ReactWhatsapp from "react-whatsapp";
import "./header.scss";

export const Header = () => {
  return (
    <>
      <Container className="d-md-none d-sm-inline bg-green text-white fs-6 text-center py-3">
        Peça agora seu cartão também pelo telefone:
        <br />
        <strong className="fs-4">+55 11 91623-5625</strong>
      </Container>
      <Navbar expand="lg" className="shadow-sm py-4" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} class="img-fluid" alt="logo cartão saúde" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end text-center"
          >
            <Nav defaultActiveKey="/" className="align-items-center">
              <Nav.Link href="#pacotes">Nossos pacotes</Nav.Link>
              <Nav.Link href="#" as="a">
                <ReactWhatsapp
                  number="5511916235625"
                  message="Oi, estou precisando de atendimento"
                  className="btn-whats"
                >
                  Solicitar Contato
                </ReactWhatsapp>
              </Nav.Link>
              <Nav.Link href="#link" as="li">
                <button className="btn-green shadow-lg"> Peça já o seu</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
