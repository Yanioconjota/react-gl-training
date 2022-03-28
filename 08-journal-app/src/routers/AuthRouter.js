import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container animate__animated animate__bounce anemate__fadeIn">
        <Routes>
          <Route path="/auth/login" element={<LoginScreen />}></Route>
          <Route path="/auth/register" element={<RegisterScreen />}></Route>
        </Routes>
      </div>
    </div>
  );
}
