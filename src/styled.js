import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #007b7b;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  transition: font-weight 0.2s ease-in-out;

  &.active {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }
`;
