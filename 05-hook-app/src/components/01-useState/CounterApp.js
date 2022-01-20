import React from 'react';
import { Button } from 'react-bootstrap';

const CounterApp = () => {
  return (
    <>
      <h1>Counter {0}</h1>
      <hr />
      <Button variant="primary">+1</Button>
    </>
  );
};

export default CounterApp;