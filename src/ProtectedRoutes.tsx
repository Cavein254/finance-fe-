import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyUserContext } from "./context/UserContext";
type ProtectedRouteProps = PropsWithChildren;
export const LoggedInUser = ({ children }: ProtectedRouteProps) => {
  const userContext = useContext(MyUserContext);
  const { user } = userContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate, user]);
  return children;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const userContext = useContext(MyUserContext);
  const { user } = userContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  return children;
};
