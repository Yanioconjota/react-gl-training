import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from "../../actions/ui";

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const { msgError } = useSelector( state => state.ui );

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
      dispatch(setError('Name is required!'));
      return false;
    } else if( !validator.isEmail(email) ) {
      dispatch(setError('invalid email!'));
      return false;
    } else if ( password !== password2 || password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match with each other!'));
      return false;
    }
    //remove error
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegister }>

        { msgError &&
          (<div className="auth__alert-error mb-5">
            { msgError }
          </div>)
        }
        
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
