
import { Navigate } from 'react-router-dom';
//import useAuth from './useAuth'; // Import the useAuth hook from its file

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  let auth =  {'token': true };// Use the useAuth hook

  return auth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;