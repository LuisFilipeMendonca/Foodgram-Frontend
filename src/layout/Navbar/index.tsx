import React, { useState } from "react";
import { toast } from "react-toastify";

import routes from "../../constants/routes";
import { useAppSelector } from "../../hooks/useAppSelector";

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
  const { isLogged } = useAppSelector((state) => state.user);

  const toggleHandler = () => setIsOpen(!isOpen);
  const closeNavbarHandler = () => setIsOpen(false);

  const navLinks = routes
    .filter((route) => route.label)
    .sort((a, b) => a.id - b.id)
    .map((route) => (
      <NavItem key={route.id} isOpen={isOpen}>
        <NavLinkItem
          exact={route.isExact}
          to={route.path}
          onClick={closeNavbarHandler}
        >
          {route.label}
        </NavLinkItem>
      </NavItem>
    ));

  return (
    <Nav>
      <NavBrand to="/">FoodGram</NavBrand>
      {isLogged ? (
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
