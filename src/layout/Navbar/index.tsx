import React, { useState } from "react";

import routes from "../../constants/routes";

import {
  Nav,
  NavBrand,
  NavMenu,
  NavItem,
  NavLinkItem,
  NavToggler,
  NavTogglerItem,
  AuthLink,
} from "./styled";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false;

  const toggleHandler = () => setIsOpen(!isOpen);

  const navLinks = routes
    .map((route) => {
      if (route.label) {
        return (
          <NavItem key={route.id} isOpen={isOpen}>
            <NavLinkItem exact={route.isExact} to={route.path}>
              {route.label}
            </NavLinkItem>
          </NavItem>
        );
      }
      return undefined;
    })
    .filter((el) => el !== undefined);

  return (
    <Nav>
      <NavBrand to="/">FoodGram</NavBrand>
      {isLoggedIn ? (
        <>
          <NavToggler onClick={toggleHandler}>
            <NavTogglerItem isOpen={isOpen} />
            <NavTogglerItem isOpen={isOpen} />
            <NavTogglerItem isOpen={isOpen} />
          </NavToggler>
          <NavMenu isOpen={isOpen}>{navLinks}</NavMenu>
        </>
      ) : (
        <AuthLink to="/login">Sign In</AuthLink>
      )}
    </Nav>
  );
};

export default Navbar;
