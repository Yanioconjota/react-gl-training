import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter: <Small value={counter}></Small></h1>
      <hr/>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={()=>{ increment(1) }}>+1</button>
        <button
          className="btn btn-secondary"
          onClick={()=>{ setShow(!show) }}>
            Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};

export default Memorize;
