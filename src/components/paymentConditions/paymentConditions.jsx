import React from "react";
import { MainContainer } from "components/container/MainContainer";
import logo from "assets/img/logo-cartao-saude.png";
import masterCard from "assets/img/master.svg";
import hipercard from "assets/img/hipercard.svg";
import elo from "assets/img/elo.svg";
import diners from "assets/img/diners.svg";
import amex from "assets/img/amex.svg";
import visa from "assets/img/visa.svg";
import "./paymentConditions.scss";

export const PaymentConditions = () => {
  return (
    <div className="payments-conditions">
      <MainContainer className="">
        <div className="row">
          <div className="col-md-12 col-lg-3">
            <div className="pe-4">
              <img src={logo} className="img-fluid mb-4" alt="logo cartão saúde" />
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="px-2 d-flex justify-content-around">
              <p className="payment-text">
                <strong>*Cartão de desconto não é plano de saúde</strong>, não
                garante e não se responsabiliza pelos serviços oferecidos e pelo
                pagamento das despesas, nem assegura desconto em todos os
                serviços obrigatoriamente garantidos por plano de saúde. Tudo o
                que o cliente usar ou comprar será por ele pago ao prestador,
                assegurando-se apenas os preços e descontos que constam na
                relação de empresas e serviços conveniados disponibilizados
                neste site. O atendimento será em até 15 dias, mediante
                disponibilidade na clínica. Consulte a clínica parceira para as
                especialidades disponíveis e condições para marcar as consultas.
              </p>
            </div>
            <p className="green-color text-uppercase fw-bold">
              FORMAS DE PAGAMENTO
            </p>
            <div className="col d-flex justify-content-md-between justify-content-center flex-sm-wrap flex-wrap">
              <img className="p-2" src={masterCard} alt="Master Card Logo" />
              <img className="p-2" src={visa} alt="Visa Logo" />
              <img className="p-2" src={amex} alt="America Express Logo" />
              <img className="p-2" src={diners} alt="Diners Logo" />
              <img className="p-2" src={elo} alt="Elo Logo" />
              <img className="p-2" src={hipercard} alt="Hipercard Logo" />
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default PaymentConditions;
