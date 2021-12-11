import React from "react";
import ReactDOM from "react-dom";
import { Container, Row } from "react-bootstrap";
import "./index.scss";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
const divRoot = document.querySelector("#root");

ReactDOM.render(
  <Container>
    <Row>
      <PrimeraApp saludo="Hola, Soy Goku!"/>
      <CounterApp value={666}/>
    </Row>
  </Container>
  ,
  divRoot
);
