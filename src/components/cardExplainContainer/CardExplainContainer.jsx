import React from "react";
import { MainContainer } from "components/container/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./cardExplainContainer.scss";

export const CardExplainContainer = () => {
  return (
    <div className="card-explain">
      <MainContainer>
        <h2 className="fs-2 title">
          O que é o <br /> <span>Cartão Nação Saúde</span>?
        </h2>

        <div>
          <p>
            O Nação Saúde é um cartão de benefícios feito para você e sua
            família. Tudo que você precisa em um só lugar.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                size={"lg"}
                color={"#30c342"}
                className="pe-2"
              />
              Telemedicina, Consultas Presenciais, Laboratórios, Odontologia,
              Nutrição, Saúde Mental, Fisioterapia, medicamentos com descontos;
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                size={"lg"}
                color={"#30c342"}
                className="pe-2"
              />
              Educação, Entretenimento, Seguros , Título de Capitalização e
              muito mais.
            </li>
          </ul>
          <button className="btn-green">Quero já</button>
        </div>
      </MainContainer>
    </div>
  );
};

export default CardExplainContainer;
