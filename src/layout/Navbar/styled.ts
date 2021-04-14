import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

type NavTogglerType = {
  isOpen?: boolean;
};

type NavLinkType = {
  isAuth?: boolean;
};

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: #deddce;
  height: ${({ theme }) => theme.dimensions.navbarHeightSmall};
`;

export const NavBrand = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.magenta};
  font-family: "Dancing Script", cursive;
`;

export const NavMenu = styled.ul<NavTogglerType>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  @media screen and (min-width: 768px) {
    position: static;
    width: unset;
    flex-direction: row;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const NavItem = styled.li<NavTogglerType>`
  text-align: center;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: ${({ isOpen }) => isOpen && "transform 0.3s ease"};
  border-top: 1px solid ${({ theme }) => theme.colors.magenta};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.magenta};
  }

  &:nth-child(2) {
    transition-delay: 0.15s;
  }

  &:nth-child(3) {
    transition-delay: 0.3s;
  }

  @media screen and (min-width: 768px) {
    border-top: none;
    margin-right: 16px;
    transform: translateX(0);
    transition: none;

    &:last-of-type {
      border-bottom: none;
      margin-right: 0;
    }
  }
`;

export const NavLinkItem = styled(NavLink)<NavLinkType>`
  display: block;
  padding: ${({ isAuth }) => (isAuth ? "6px 24px" : "20px 0")};
  border-radius: ${({ isAuth }) => isAuth && "3px"};
  background-color: #deddce;
  color: ${({ theme }) => theme.colors.magentaOpacity};
  font-family: "Dancing Script", cursive;
  font-size: 1.4rem;
  background-color: ${({ theme, isAuth }) =>
    isAuth && theme.colors.magentaOpacity};
  color: ${({ theme, isAuth }) => isAuth && theme.colors.textLight};

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.magenta};
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media screen and (min-width: 768px) {
    padding: 6px 24px;
    border-radius: 3px;

    &:hover,
    &.active {
      background-color: ${({ theme, isAuth }) =>
        isAuth ? theme.colors.magenta : theme.colors.magentaOpacity};
    }
  }
`;

export const NavToggler = styled.button`
  position: relative;
  width: 35px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavTogglerItem = styled.span<NavTogglerType>`
  display: block;
  width: ${({ isOpen }) => (isOpen ? "20px" : "25px")};
  height: 2px;
  background-color: ${({ theme }) => theme.colors.magenta};
  position: absolute;
  transition: transform 0.2s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0) rotate(315deg)" : "translateY(-6px)"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0) rotate(45deg)" : "translateY(6px)"};
  }
`;
