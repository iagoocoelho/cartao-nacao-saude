import React from "react";
import { MainContainer } from "components/container/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCircleNodes, faClipboard, faHeartPulse, faListCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./telemedicineEinstein.scss";

export const TelemedicineEinstein = () => {
  return (
    <div className="telemedicine-einstein">
      <div className="telemedicine-einstein-overlay" />
      <MainContainer>
        <div className="col-md-12 col-lg-6 px-2">
          <h2 className="fs-2 title">
            Telemedicina <span>Einstein Conecta</span>
          </h2>

          <p>
            Orientação médica on-line 24 horas por dia, direto no seu celular,
            tablet ou computador.
          </p>

          <div>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  size={"2x"}
                  color={"#30c342"}
                />
                Médicos com qualidade Einstein
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faListCheck}
                  size={"2xl"}
                  color={"#30c342"}
                  className="listCheck"
                />
                Diretrizes Internacionais de atendimento
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size={"2xl"}
                  color={"#30c342"}
                />
                Sistema ágil e descomplicado
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faClipboard}
                  size={"2x"}
                  color={"#30c342"}
                  className="clip"
                />
                Serviço de alta qualidade com custo acessível
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  size={"xl"}
                  color={"#30c342"}
                />
                Atendimento adulto e pediátrico
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faClock}
                  size={"2x"}
                  color={"#30c342"}
                />
                Disponível 24 hrs por dia, 7 dias por semana
              </li>
            </ul>
            <a href="#pacotes" className="btn-green">Começar agora</a>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default TelemedicineEinstein;
