import React from 'react';
import { Button } from 'react-bootstrap';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  
  return (
    <>
      <h1>Breaking bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-primary text-center">loading...</div>
      ) : (
        <>
          <blockquote className="blockquote Text-right">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          <Button onClick={ () => increment(1) } variant="primary" className="w-100">
           Cargar otra cita
          </Button>
        </>
      )}
    </>
  );
};

export default MultipleCustomHooks;
