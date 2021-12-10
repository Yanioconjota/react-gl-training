import React from "react";
import ReactDOM from "react-dom";
import { Container, Row } from "react-bootstrap";
import "./index.scss";
import PrimeraApp from "./PrimeraApp";
const divRoot = document.querySelector("#root");

ReactDOM.render(
  <Container>
    <Row>
      <PrimeraApp />
    </Row>
  </Container>
  ,
  divRoot
);
