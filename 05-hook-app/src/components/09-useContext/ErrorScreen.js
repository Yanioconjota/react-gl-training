import React from 'react';
import kenobi from '../../assets/img/kenobi.gif';

export const ErrorScreen = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="mt-5" src={kenobi} alt="" />
      <p className="text-yellow">This is not the screen you're looking for</p> 
    </div>
  );
};
