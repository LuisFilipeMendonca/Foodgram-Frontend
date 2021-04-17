import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IProtectedRoute {
  isExact: boolean;
  isClosed: boolean;
  path: string;
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  path,
  isExact,
  isClosed,
  component,
}) => {
  const { isLogged } = useAppSelector((state) => state.user);

  if (!isLogged && isClosed) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} exact={isExact} component={component} />;
};

export default ProtectedRoute;
