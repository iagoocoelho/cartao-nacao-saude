import React from "react";
import { MainContainer } from "components/container/MainContainer";
import "./getContactContainer.scss";

export const GetContactContainer = () => {
  return (
    <div className="get-contact">
      <MainContainer>
        <div class="col px-2 d-flex justify-content-around">
          <h2 className="fs-2 title">
            <span>Alguma dúvida?</span> Contate-nos!
          </h2>

          <button className="btn-green">Entre em contato</button>
        </div>
      </MainContainer>
    </div>
  );
};

export default GetContactContainer;
