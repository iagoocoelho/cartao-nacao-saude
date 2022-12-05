import React, { useState, useMemo } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "assets/img/logo-cartao-saude.png";
import ReactWhatsapp from "react-whatsapp";
import { replaceOnlyNumber, getWhatsByVendorId } from "common/utils";
import "./header.scss";

export const Header = () => {
  const [vendorId, setVendorId] = useState("");
  const { search } = useLocation();

  useMemo(() => {
    if (search) {
      setVendorId(replaceOnlyNumber(search));
    }
  }, [search]);

  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm p-0 navbar navbar-expand-lg navbar-light d-flex flex-column"
      >
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
                  number={`${getWhatsByVendorId(vendorId)}`}
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
