import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  const navigate = useNavigate();

  useEffect(() => {

    if (!user) {
      return navigate(redirectPath);
    }
  
    return children;
  }, [children, user, navigate, redirectPath])
 
};

export default ProtectedRoute;
