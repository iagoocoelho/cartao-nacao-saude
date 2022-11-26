import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "assets/img/logo-cartao-saude.png";
import ReactWhatsapp from "react-whatsapp";
import "./header.scss";

export const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm p-0 navbar navbar-expand-lg navbar-light d-flex flex-column"
      >
        <div className="bg-green text-white fs-6 text-center py-3 w-100 d-flex d-sm-block flex-column">
          Peça agora seu cartão também pelo telefone:
          <strong className="fs-4"> +55 11 91623-5625</strong>
        </div>
        <Container className="p-4">
          <Navbar.Brand href="#">
            <img src={logo} className="img-fluid" alt="logo cartão saúde" />
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
              <Nav.Link href="#pacotes" as="a" className="btn-green">
                Peça já o seu
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
