import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import validator from "validator";
import { useForm } from '../../hooks/useForm';
import { startLoginWithEmailPassword, startGoogleLogin } from "../../actions/auth";
import { setError, removeError } from "../../actions/ui";

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector((state) => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    email: 'homerothompson@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginWithEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("invalid email!"));
      return false;
    } else if (password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters!"
        )
      );
      return false;
    }
    //remove error
    dispatch(removeError());
    return true;
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <h3 className="auth__title">Login</h3>
      <form onSubmit={ handleLogin }>
        { msgError &&
          (<div className="auth__alert-error mb-5">
            { msgError }
          </div>)
        }

        <input type="text"
               placeholder="Email"
               name="email"
               className="auth__input"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }/>

        <input type="password" 
               placeholder="Ppassword"
               name="password"
               className="auth__input"
               value={ password }
               onChange={ handleInputChange }/>

        <button type="submit"
                disabled={ loading }
                className="btn btn-primary btn-block">Login
        </button>
        
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={ handleGoogleLogin }>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>

            <p className="btn-text">
              Sign in with google
            </p>
          </div>

        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </div>
  );
}
