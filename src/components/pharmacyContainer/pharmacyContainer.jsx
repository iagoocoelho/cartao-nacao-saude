import React from "react";
import { MainContainer } from "components/container/MainContainer";
import drogariaSaoPaulo from "assets/img/logo-drogaria-sao-paulo.png";
import drogariaPacheco from "assets/img/drogarias-pacheco-logo.png";
import drogariaPagueMenos from "assets/img/pague-menos-logo.png";
import drogariaDrogasil from "assets/img/drogasil-logo.png";
import DrogaRaia from "assets/img/droga-raia-logo.png";
import "./pharmacyContainer.scss";

export const PharmacyContainer = () => {
  return (
    <div className="pharmacy">
      <div className="pharmacy-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-12 px-2">
          <h2 className="fs-2 title">
            Medicamentos com até <span>30% de desconto</span>
          </h2>

          <p>
            Descontos concedidos apenas para os pacotes com rede credenciada*.
          </p>

          <div className="p-4 my-4 bg-white rounded-4 pharmy-container">
            <img src={drogariaSaoPaulo} alt="Drogaria São Paulo" />
            <img src={drogariaPacheco} alt="Drogaria Pacheco" />
            <img src={drogariaPagueMenos} alt="Drogaria Pague Menos" />
            <img src={drogariaDrogasil} alt="Drogaria Drogasil" />
            <img src={DrogaRaia} alt="Drogaria Drogaraia" />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default PharmacyContainer;
