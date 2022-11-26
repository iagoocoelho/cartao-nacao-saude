import React from "react";
import { MainContainer } from "components/container/MainContainer";
import cruzeiroLogo from "assets/img/cruzeiro-educacional.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./cruzeiroDoSulContainer.scss";

export const CruzeiroDoSulContainer = () => {
  return (
    <div className="cruzeiro-do-sul">
      <div className="cruzeiro-do-sul-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-6 px-2">
          <div className="col-6 py-4">
            <img src={cruzeiroLogo} alt="Logo porto seguro" />
          </div>

          <h2 className="fs-2 title">
            Estude no <span>Grupo Cruzeiro do Sul</span>
          </h2>
          <p className="d-flex py-4">
            <FontAwesomeIcon
              icon={faCheck}
              size={"lg"}
              color={"#30c342"}
              className="pe-2"
            />
            Até 40% de desconto nas mensalidades dos cursos de Graduação
            Presencial, Graduação EAD e Pós-graduação.
          </p>

          <a href="#pacotes" className="btn-green">Assine já</a>
        </div>
      </MainContainer>
    </div>
  );
};

export default CruzeiroDoSulContainer;
