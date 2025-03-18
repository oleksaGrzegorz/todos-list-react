import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink).attrs(({ isActive }) => ({
  className: isActive ? "active" : "",
}))`
  &.active {
    color: red;
  }
`;

export default StyledNavLink;