import React from "react";
import { MainContainer } from "components/container/MainContainer";
import "./medicalAppointments.scss";

export const MedicalAppointments = () => {
  return (
    <div className="consultas">
      <div className="consultas-overlay" />
      <MainContainer>
        <div class="col-md-12 col-lg-6 px-2">
          <h2 className="fs-2 title">
            Consultas <span>presenciais e online</span>
          </h2>

          <p>
            Todas as especialidades médicas para realização de consultas
            presenciais e online.
          </p>

          <a href="#pacotes" className="btn-green">Quero assinar</a>
        </div>
      </MainContainer>
    </div>
  );
};

export default MedicalAppointments;
