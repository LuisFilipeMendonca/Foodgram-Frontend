import React from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import routes from "../constants/routes";

import NotFound from "../pages/404";

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) =>
        route.isClosed ? (
          <ProtectedRoute
            key={route.id}
            path={route.path}
            isClosed={route.isClosed}
            isExact={route.isExact}
            component={route.component}
          />
        ) : (
          <Route
            key={route.id}
            path={route.path}
            exact={route.isExact}
            component={route.component}
          />
        )
      )}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
