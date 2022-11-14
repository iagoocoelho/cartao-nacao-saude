import React from "react";
import { MainContainer } from "components/container/MainContainer";
import Header from "components/header/Header";
import MainCarousel from "components/mainCarousel/MainCarousel";

export const Home = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <MainCarousel />
      </MainContainer>
    </>
  );
};

export default Home;
