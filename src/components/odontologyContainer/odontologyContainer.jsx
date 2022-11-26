import React from "react";
import { MainContainer } from "components/container/MainContainer";
import "./odontologyContainer.scss";

export const OdontologyContainer = () => {
  return (
    <div className="odontologia">
      <div className="odontologia-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-6 px-2">
          <h2 className="fs-2 title">Odontologia</h2>

          <p>
            Tratamentos odontológicos de baixa e alta complexidade, próteses,
            preventivos e estéticos.
          </p>

          <a href="#pacotes" className="btn-green">
            Assine já
          </a>
        </div>
      </MainContainer>
    </div>
  );
};

export default OdontologyContainer;
