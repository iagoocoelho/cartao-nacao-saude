import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "components/container/MainContainer";
import ReactWhatsapp from "react-whatsapp";
import { replaceOnlyNumber, getWhatsByVendorId } from "common/utils";
import "./getContactContainer.scss";

export const GetContactContainer = () => {
  const [vendorId, setVendorId] = useState("");
  const { search } = useLocation();

  useMemo(() => {
    if (search) {
      setVendorId(replaceOnlyNumber(search));
    }
  }, [search]);

  return (
    <div className="get-contact" id="contact">
      <MainContainer>
        <div className="col px-2 d-flex justify-content-around">
          <h2 className="fs-2 title">
            <span>Alguma dúvida?</span> Contate-nos!
          </h2>
          <ReactWhatsapp
            number={`${getWhatsByVendorId(vendorId)}`}
            message="Oi, estou precisando de atendimento"
            className="btn-green"
          >
            Entre em contato
          </ReactWhatsapp>
        </div>
      </MainContainer>
    </div>
  );
};

export default GetContactContainer;
