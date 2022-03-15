import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { uiReducer } from '../../reducers/uiReducer';
import { types } from '../../types/types';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: 'Homero',
    email: "homerothompson@gmail.com",
    password: "123456",
    password2: "123456"
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (isFormValid()) {
      console.log('VALID FORM!');
    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      console.log('Name is required!');
      return false;
    } else if( !validator.isEmail(email) ) {
      console.log('invalid email!');
      return false;
    } else if ( password !== password2 || password.length < 5) {
      console.log('Password should be at least 6 characters and match with each other!');
      return false;
    }
    
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegister }>

        <div className="auth__alert-error">
          Error
        </div>
        
        <input type="text"
               placeholder="Name"
               name="name"
               value={ name }
               onChange={ handleInputChange }
               className="auth__input"
               autoComplete="off"/>

        <input type="text"
               placeholder="Email"
               name="email"
               value={ email }
               onChange={ handleInputChange }
               className="auth__input"
               autoComplete="off"/>

        <input type="password" 
               placeholder="Password"
               name="password"
               value={ password }
               onChange={ handleInputChange }
               className="auth__input"/>

        <input type="password" 
               placeholder="Confirm password"
               name="password2"
               value={ password2 }
               onChange={ handleInputChange }
               className="auth__input"/>

        <button type="submit"
                className="btn btn-primary btn-block mb-5">Login
        </button>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  )
}
