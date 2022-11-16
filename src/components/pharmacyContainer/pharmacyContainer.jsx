import React from "react";
import { MainContainer } from "components/container/MainContainer";
import pharmacyLogo from "assets/img/logos-farmacias.png";
import "./pharmacyContainer.scss";

export const PharmacyContainer = () => {
  return (
    <div className="pharmacy">
      <div className="pharmacy-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-8 px-2">
          <h2 className="fs-2 title">
            Medicamentos com até <span>30% de desconto</span>
          </h2>

          <p>
            Descontos concedidos apenas para os pacotes com rede credenciada*.
          </p>

          <div className="p-4 my-4 bg-white rounded-4">
            <img src={pharmacyLogo} alt="Logos Farmácias" />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default PharmacyContainer;
