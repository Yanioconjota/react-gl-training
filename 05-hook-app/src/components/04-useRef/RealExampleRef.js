import React, { useState } from "react";
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr/>

      {show && <MultipleCustomHooks/>}

      <button
        className="btn btn-primary mt-4"
        onClick={()=>{setShow(!show)}}>Show/Hide</button>

    </>
  );
};

export default RealExampleRef;
