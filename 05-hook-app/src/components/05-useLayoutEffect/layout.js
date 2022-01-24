import React, { useRef, useLayoutEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);
  

  return (
    <>
      <h1>useLayoutEffect | <em>Breaking bad Quotes</em></h1>
      <hr />
      <blockquote className="blockquote Text-right">
        <p ref={pTag}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <pre className="Code">{JSON.stringify(boxSize, null, 3)}</pre>
      <Button onClick={() => increment(1)} variant="primary" className="w-100">
        Cargar otra cita
      </Button>
    </>
  );
};

export default Layout;
