import React from "react";
import { MainContainer } from "components/container/MainContainer";
import Header from "components/header/Header";
import MainCarousel from "components/mainCarousel/MainCarousel";
import CardExplainContainer from "components/cardExplainContainer/CardExplainContainer";
import HealthExplainContainer from "components/healthExplainContainer/HealthExplanationContainer";
import BenefitsContainer from "components/benefitsContainer/BenefitsContainer";
import TelemedicineEinstein from "components/telemedicineEinstein/telemedicineEinstein";
import PortoSeguroContainer from "components/portoSeguroContainer/portoSeguroContainer";
import PharmacyContainer from "components/pharmacyContainer/pharmacyContainer";
import ExamsContainer from "components/examsContainer/examsContainer";
import MedicalAppointments from "components/medicalAppointmentsContainer/medicalAppointmentsContainer";
import CruzeiroDoSulContainer from "components/cruzeiroDoSulContainer/cruzeiroDoSulContainer";
import OursPackagesContainer from "components/oursPackagesContainer/oursPackagesContainer";
import GetContactContainer from "components/getContactContainer/getContactContainer";
import PaymentConditions from "components/paymentConditions/paymentConditions";
import FaqContainer from "components/Faq/FaqContainer";
import OdontologyContainer from "components/odontologyContainer/odontologyContainer";

export const Home = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <MainCarousel />
      </MainContainer>

      <CardExplainContainer />
      <HealthExplainContainer />
      <BenefitsContainer />
      <TelemedicineEinstein />
      <PortoSeguroContainer />
      <PharmacyContainer />
      <ExamsContainer />
      <MedicalAppointments />
      <OdontologyContainer />
      <CruzeiroDoSulContainer />
      <OursPackagesContainer />
      <GetContactContainer />
      <PaymentConditions />
      <FaqContainer />
    </>
  );
};

export default Home;
