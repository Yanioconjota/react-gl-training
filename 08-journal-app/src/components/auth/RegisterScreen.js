import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name: 'Homero',
    email: "homerothompson@gmail.com",
    password: "123456",
    password2: "123456"
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegister }>
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
