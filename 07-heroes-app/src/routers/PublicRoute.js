import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

const PublicRoute = ({children}) => {

  const { user } = useContext(AuthContext);
  console.log(user);

  return !user.logged
    ? children
    : <Navigate to="/"/>
}

export default PublicRoute