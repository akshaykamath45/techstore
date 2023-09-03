import { Navigate, useLocation } from "react-router-dom";
export const RequiresAuth = ({ children, isLoggedIn }) => {
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }}></Navigate>
  );
};
