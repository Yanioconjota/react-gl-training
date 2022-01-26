import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  //Se usa useCallback en conjunto con useMemo para evitar que se renderize el componete cuando se ejecute una función que le pasamos a un componente memorizado, se recomienda usar con useEffect si no queremos que se renderize el componente con cada ejecución de la función.
  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);
  

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallBackHook;
