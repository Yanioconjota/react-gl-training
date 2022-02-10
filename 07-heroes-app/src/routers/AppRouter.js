import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
