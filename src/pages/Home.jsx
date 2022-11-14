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
    </>
  );
};

export default Home;
