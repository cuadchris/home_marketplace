import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStatus } from "../hooks/useAuthStatus"
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  // const { loggedIn, checkingStatus} = useAuthStatus()
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }

  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
