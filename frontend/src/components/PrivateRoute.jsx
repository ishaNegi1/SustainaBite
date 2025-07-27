import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const status = useSelector(state => state.auth.status);
  return status ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
