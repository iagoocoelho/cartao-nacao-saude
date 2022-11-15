import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/MainContainer";
import { useLocation } from "react-router-dom";
import logo from "assets/img/logo-cartao-saude.png";
import "./register.scss";

export const Register = ({ useParams }) => {
  const { pathname } = useLocation();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    bithday: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    // debugger
  };

  return (
    <div className="register">
      <div className="col text-center py-4 title">
        <img src={logo} class="img-fluid" alt="logo cartão saúde" />
        <h3 className="p-2">Cadastro {pathname.replace("/", "")}</h3>
      </div>

      <h1>{useParams}</h1>
      <MainContainer>
        <Form>
          <Row className="mb-3">
            <Form.Group className="col-8" as={Col} controlId="name">
              <Form.Control placeholder="Nome do Titular" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="date" />
              <Form.Text className="text-muted">
                Data de Nascimento (dd/mm/aaaa)
              </Form.Text>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </MainContainer>
    </div>
  );
};

export default Register;
