
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  const navigate = useNavigate();

  if (!user) {
    return navigate(redirectPath);
  }

  return children;
  
 
};

export default ProtectedRoute;
