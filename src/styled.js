import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: red;
  }
`;

export default StyledNavLink;