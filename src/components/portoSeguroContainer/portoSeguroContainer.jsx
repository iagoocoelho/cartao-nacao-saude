import React from "react";
import { MainContainer } from "components/container/MainContainer";
import portoSeguroLogo from "assets/img/porto-seguro-logo-black.png";
import "./portoSeguroContainer.scss";

export const PortoSeguroContainer = () => {
  return (
    <div className="porto-seguro">
      <div className="porto-seguro-overlay" />
      <MainContainer>
        <div class="col-md-12 col-lg-6 px-2">
          <div className="col-6 py-4">
            <img src={portoSeguroLogo} alt="Logo porto seguro" />
          </div>

          <h2 className="fs-2 title">
            <span>Seguro de vida</span>, acidente pessoal e auxílio funeral
          </h2>

          <p>
            Benefícios de acordo com sua proteção, para você usar quando
            precisar.
          </p>

          <p>R$5.500,00 para um dos momentos mais delicados.</p>

          <button className="btn-green">Assine já</button>
        </div>
      </MainContainer>
    </div>
  );
};

export default PortoSeguroContainer;
