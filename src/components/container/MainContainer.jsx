import React from "react";
import { Container } from "react-bootstrap";
import "./mainContainer.scss";

export const MainContainer = ({ children }) => (
  <Container>{children}</Container>
);

export default MainContainer;
