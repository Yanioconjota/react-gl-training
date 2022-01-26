import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      {/* <p>{ procesoPesado(counter) }</p> se dispara con cualquier cambio */}
      <p>{ memoProcesoPesado }</p>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            increment(1);
          }}
        >
          +1
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};

export default MemoHook;
