import React, { useEffect, useMemo, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/MainContainer";
import { useLocation } from "react-router-dom";
import logo from "assets/img/logo-cartao-saude.png";
import MaskedInput from "react-text-mask";
import { connect } from "react-redux";
import * as packagesActions from "store/packages/actions";
import contrato from "assets/docs/Contrato-de-Servicos-Cartao-Nacao-Saude-e-Beneficios-2022.pdf";
import "./register.scss";

export const Register = ({ registerRequest, registerState }) => {
  const { pathname, state } = useLocation();
  const [path, setPath] = useState("");
  const [packageId, setPackageId] = useState(0);

  useMemo(() => {
    setPath(pathname.split("/")[2]);
  }, [pathname]);

  useEffect(() => {
    if (state?.packageId !== null) setPackageId(state?.packageId);
  }, [state]);

  const [data, setData] = useState({
    package_id: 0,
    vendor_cpf: "",
    name: "",
    email: "",
    gender: "",
    birth_date: "",
    mobile_number: "",
    cpf: "",
    rg: "",
    nationality: "",
    address: "",
    address_number: "",
    address_complement: "",
    district: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const replaceSpecialCharacter = (text) => {
    return text.replace(/[^\w\s]|_/gi, "");
  };

  const replaceOnlyNumber = (text) => {
    return text.match(/\d+/g).pop();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newData = {
      ...data,
      package_id: packageId,
      vendor_cpf: state.vendor_cpf ? replaceOnlyNumber(state.vendor_cpf) : "",
      cpf: replaceSpecialCharacter(data.cpf),
      rg: replaceSpecialCharacter(data.rg),
      zip_code: replaceSpecialCharacter(data.zip_code),
    };

    registerRequest(newData);
  };

  return (
    <div className="register">
      <div className="col text-center py-4 title">
        <img src={logo} className="img-fluid" alt="logo cartão saúde" />
        <h3 className="p-2">Cadastro {path}</h3>
      </div>

      <MainContainer>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              className="col-12 col-sm-8 pb-2"
              as={Col}
              controlId="name"
            >
              <Form.Control
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Nome do Titular"
                required
              />
              <Form.Text className="text-muted">
                Nome completo do Titular
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="birth_date">
              <Form.Control
                type="date"
                onChange={(e) =>
                  setData({ ...data, birth_date: e.target.value })
                }
                required
              />
              <Form.Text className="text-muted">
                Data de Nascimento (dd/mm/aaaa)
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3 text-center text-sm-start" required>
              <Form.Check
                inline
                type="radio"
                label="Masculino"
                value="M"
                name="radioGender"
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
              <Form.Check
                inline
                type="radio"
                label="Feminino"
                value="F"
                name="radioGender"
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
              <Form.Check
                inline
                type="radio"
                label="Outros"
                value="O"
                name="radioGender"
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              className="mb-3 col-12 col-sm-6"
              controlId="email"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3 col-12 col-sm-6"
              controlId="mobile_number"
            >
              <Form.Control
                type="tel"
                pattern="[0-9]{11}|[0-9]{12}"
                placeholder="Whatsapp (DDD + Número)"
                onChange={(e) =>
                  setData({ ...data, mobile_number: e.target.value })
                }
                required
              />
              <Form.Text className="text-muted">
                Somente dígitos - Exemplo: 11910101111
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              className="mb-3 col-6 col-sm-4"
              controlId="cpf"
            >
              <MaskedInput
                placeholder="CPF"
                className="form-control"
                required
                minLength={11}
                onChange={(e) => setData({ ...data, cpf: e.target.value })}
                mask={[
                  /[0-9]/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-6 col-sm-4" controlId="rg">
              <MaskedInput
                placeholder="RG"
                className="form-control"
                required
                onChange={(e) => setData({ ...data, rg: e.target.value })}
                mask={[
                  /[0-9]/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="nationality">
              <Form.Control
                placeholder="Nacionalidade"
                required
                onChange={(e) =>
                  setData({ ...data, nationality: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              className="mb-3 col-9 col-sm-10"
              controlId="address"
            >
              <Form.Control
                required
                placeholder="Endereço (Avenida, Rua...)"
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="address_number">
              <Form.Control
                placeholder="Número"
                required
                onChange={(e) =>
                  setData({ ...data, address_number: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="address_complement"
            >
              <Form.Control
                placeholder="Complemento (fundos, apto, bloco)"
                onChange={(e) =>
                  setData({ ...data, address_complement: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="district">
              <Form.Control
                placeholder="Bairro / Jardim"
                onChange={(e) => setData({ ...data, district: e.target.value })}
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="zip_code">
              <MaskedInput
                placeholder="CEP"
                className="form-control"
                onChange={(e) => setData({ ...data, zip_code: e.target.value })}
                mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="city">
              <Form.Control
                placeholder="Cidade"
                onChange={(e) => setData({ ...data, city: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="state">
              <Form.Control
                placeholder="UF"
                onChange={(e) => setData({ ...data, state: e.target.value })}
                required
              />
              <Form.Text className="text-muted">Exemplo: SP</Form.Text>
            </Form.Group>
          </Row>

          {path === "familiar" || path === "familiar-plus" ? (
            <Row>
              <Col className="py-4">
                <strong>Observação:</strong> Nos Pacotes{" "}
                <strong>Familiar</strong> e <strong>Familiar Plus</strong>, os
                dependentes serão informados e cadastrados no contato via
                Whatsapp posterior a este processo. Sendo até 3 dependentes.
              </Col>
            </Row>
          ) : (
            ""
          )}

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Maior de 18 anos" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  Li e aceito os termos e condições.
                  <a
                    className="px-1"
                    href={contrato}
                    download="Contrato-de-Servicos-Cartao-Nacao-Saude-e-Beneficios-2022"
                  >
                    Baixar contrato
                  </a>
                </span>
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Eu aceito notificações e contato via SMS, e-mail ou telefone"
            />
          </Form.Group>

          <Row>
            <Col className="text-center text-sm-end py-4">
              <button
                disabled={registerState.loading}
                variant="primary"
                className="btn-green"
                type="submit"
              >
                {registerState.loading ? "Enviando..." : "Enviar"}
              </button>
            </Col>
          </Row>
        </Form>
      </MainContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerState: state.packages.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (data) => {
      dispatch(packagesActions.registerRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
