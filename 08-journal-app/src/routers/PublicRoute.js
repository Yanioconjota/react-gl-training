import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isAuth }) => {

  return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRoute