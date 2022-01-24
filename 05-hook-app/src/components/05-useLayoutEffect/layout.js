import React, { useRef, useLayoutEffect, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);
  

  return (
    <>
      <h1>Breaking bad Quotes</h1>
      <hr />
      <blockquote className="D-flex">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre className="Code">{JSON.stringify(boxSize, null, 3)}</pre>
      <button onClick={() => increment(1)} className="btn btn-primary">
        Cargar otra cita
      </button>
    </>
  );
};

export default Layout;
