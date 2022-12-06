import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import * as authActions from "store/auth/actions";
import Spinner from "react-bootstrap/Spinner";
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

export const Home = ({
  authRequest,
  verifyTokenRequest,
  auth_token,
  auth_state,
}) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (auth_token) {
        verifyTokenRequest();
      } else {
        authRequest();
      }
    }
  }, [authRequest, auth_token, verifyTokenRequest]);

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

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth.data?.access_token,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: () => {
      dispatch(authActions.authRequest());
    },
    verifyTokenRequest: () => {
      dispatch(authActions.verifyTokenRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
