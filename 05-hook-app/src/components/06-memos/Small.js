import React from 'react';

const Small = ({value}) => {

  console.log("component called 🤖");

  return (
    <small>{value}</small>
  );
};

//React.memo() Evita que se rendrize el componente si el mismo no cambió!
export default React.memo(Small);
