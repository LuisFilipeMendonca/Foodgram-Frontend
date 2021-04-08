import React from "react";

import routes from "../../constants/routes";

import { Nav, NavBrand, NavMenu, NavLinkItem } from "./styled";

const Navbar: React.FC = () => {
  const navLinks = routes
    .map((route) => {
      if (route.label) {
        return (
          <li key={route.id}>
            <NavLinkItem exact={route.isExact} to={route.path}>
              {route.label}
            </NavLinkItem>
          </li>
        );
      }
      return undefined;
    })
    .filter((el) => el !== undefined);

  return (
    <Nav>
      <NavBrand to="/">FoodGram</NavBrand>
      <NavMenu>{navLinks}</NavMenu>
    </Nav>
  );
};

export default Navbar;
