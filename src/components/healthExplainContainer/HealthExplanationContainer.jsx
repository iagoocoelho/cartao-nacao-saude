import React from "react";
import { MainContainer } from "components/container/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMedal } from "@fortawesome/free-solid-svg-icons";
import "./healthExplainContainer.scss";

export const healthExplainContainer = () => {
  return (
    <div className="health-explain">
      <div className="health-explain-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-6 px-2">
          <h2 className="fs-2 title">
            Uma nação só é forte se tem acesso a saúde, educação e prevenção
          </h2>

          <div>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size={"lg"}
                  color={"#30c342"}
                  className="pe-2"
                />
                Rede com mais de 10 mil opções para atendimento em todo Brasil.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size={"lg"}
                  color={"#30c342"}
                  className="pe-2"
                />
                Atendimentos online e presenciais, você pede e nós agendamos sua
                consulta de forma rápida, fácil e segura.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size={"lg"}
                  color={"#30c342"}
                  className="pe-2"
                />
                Orientação médica on-line 24 horas por dia.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size={"lg"}
                  color={"#30c342"}
                  className="pe-2"
                />
                Seguros assistenciais nos momentos que você mais precisa.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size={"lg"}
                  color={"#30c342"}
                  className="pe-2"
                />
                Educação presencial ou a distância, colégios ou graduação com
                descontos e taxa de matrícula grátis.
              </li>
            </ul>
            <a href="#pacotes" className="btn-green">Assine já</a>
          </div>
        </div>

        <div className="row note-container">
          <div className="col">
            <div className="row note p-4">
              <div className="col-md-12 col-lg-6 note-text">
                <FontAwesomeIcon
                  icon={faMedal}
                  size={"3x"}
                  color={"#30c342"}
                  className="pe-2"
                />
                <div>
                  <h5 className="m-0">Melhor e Mais Tradicional</h5>
                  <p className="m-0">rede credenciada do mercado</p>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 note-text">
                <FontAwesomeIcon
                  icon={faMedal}
                  size={"3x"}
                  color={"#30c342"}
                  className="pe-2"
                />
                <div>
                  <h5 className="m-0">Qualidade e Custo Benefício</h5>
                  <p className="m-0">Milhares de associados usam e aprovam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default healthExplainContainer;
