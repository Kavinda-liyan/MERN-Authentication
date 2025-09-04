import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to={"/login"} replace />;
  }

  if (userInfo) {
    return children;
  }
};

export default PrivateRoute;
