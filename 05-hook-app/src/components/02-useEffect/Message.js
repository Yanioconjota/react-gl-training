import React, { useEffect, useState } from "react";

export const Message = () => {

  const [coords, setCoords] = useState({
    x: 0, y:0
  });

  const { x, y } = coords;

  useEffect(() => {
    //Se inicia con el componente
    console.log('componente montado');

    const mouseMove = (e) => {
      const coords = {
        x: e.x,
        y: e.y,
      };
      setCoords(coords);
    };
    
    window.addEventListener('mousemove', mouseMove);
  
    return () => {
      //se ejecuta cuando el componente es desmontado
      console.log("componente desmontado");
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  

  return (
    <>
      <h1>You're awesome!!!</h1>
      <h3>Mouse coordinates with use effect</h3>
      <p>X: { x } Y: { y }</p>
    </>
  );
};
