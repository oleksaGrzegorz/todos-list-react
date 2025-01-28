import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 10px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 5px 0;
  padding: 10px;
  border-bottom: 2px solid hsl(0, 6%, 87%);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-grow: 1;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
