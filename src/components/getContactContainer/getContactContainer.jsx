import React from "react";
import { MainContainer } from "components/container/MainContainer";
import ReactWhatsapp from "react-whatsapp";
import "./getContactContainer.scss";

export const GetContactContainer = () => {
  return (
    <div className="get-contact" id="contact">
      <MainContainer>
        <div class="col px-2 d-flex justify-content-around">
          <h2 className="fs-2 title">
            <span>Alguma dúvida?</span> Contate-nos!
          </h2>

          <ReactWhatsapp
            number="5511916235625"
            message="Oi, estou precisando de atendimento"
            className="btn-whats"
          >
            Entre em contato
          </ReactWhatsapp>
        </div>
      </MainContainer>
    </div>
  );
};

export default GetContactContainer;
