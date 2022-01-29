import React from "react";
import Hijo from "./Hijo";
import { useState, useCallback } from "react";

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // const incrementar = (num) => {
  //   setValor(valor + num);
  // };

	const incrementar = useCallback((num) => {
    setValor(valor => valor + num);
  }, [setValor]);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      <div className="btn-group">
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>
      {/* <Hijo /> */}
    </div>
  );
};

export default Padre;
