import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";

const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const {counter1, counter2, counter3, counter4} = state;

  //console.log(counter);

  return (
    <>
      <Row>
        <Col xs={6}>
          <h1>Counter {counter1}</h1>
          <h1>Counter {counter2}</h1>
        </Col>
        <Col xs={6}>
          <h1>Counter {counter3}</h1>
          <h1>Counter {counter4}</h1>
        </Col>
      </Row>
      <hr />
      <Button
        variant="primary"
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
            counter4: counter4 + 10
          });
        }}
      >
        +1
      </Button>
    </>
  );
};

export default CounterApp;