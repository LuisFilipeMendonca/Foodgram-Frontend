import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../constants/routes";

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.id}
          exact={route.isExact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
