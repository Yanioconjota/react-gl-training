import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'animate.css';
import GifExpertApp from "./GifExpertApp";
import { Container, Row } from "react-bootstrap";

ReactDOM.render(
  <Container>
    <Row>
      <GifExpertApp />
    </Row>
  </Container>,
  document.getElementById('root')
);
