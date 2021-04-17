import React from "react";
import { Switch } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import routes from "../constants/routes";

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <ProtectedRoute
          key={route.id}
          isExact={route.isExact}
          path={route.path}
          component={route.component}
          isClosed={route.isClosed}
        />
      ))}
    </Switch>
  );
};

export default Routes;
