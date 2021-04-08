import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
`;

export const NavBrand = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.magenta};
`;

export const NavMenu = styled.ul`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const NavLinkItem = styled(NavLink)`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.magentaOpacity};
  position: relative;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &.active::before,
  &:hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.magentaOpacity};
    z-index: -1;
  }
`;
