import React from "react";
import { MainContainer } from "components/container/MainContainer";
import "./examsContainer.scss";

export const ExamsContainer = () => {
  return (
    <div className="exames">
      <div className="exames-overlay" />
      <MainContainer>
        <div class="col-md-12 col-lg-6 px-2">
          <h2 className="fs-2 title">
            Exames <span>laboratoriais e imagem</span>
          </h2>

          <p>
            São mais de 5 mil tipos de exames realizados nos mais modernos
            equipamentos do país, o que garante um resultado rápido, preciso e
            com excelência.
          </p>

          <button className="btn-green">Assine já</button>
        </div>
      </MainContainer>
    </div>
  );
};

export default ExamsContainer;
