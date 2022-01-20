import React from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100);
  
  return (
    <>
      <h1>Counter with hooks { state }</h1>
      <hr />
      <ButtonGroup>
        <Button onClick={ () => increment(2) } variant="primary">+1</Button>
        <Button onClick={ reset } variant="info">Reset</Button>
        <Button onClick={ () => decrement(2) } variant="secondary">-1</Button>
      </ButtonGroup>
    </>
  );
};

export default CounterWithCustomHook;
