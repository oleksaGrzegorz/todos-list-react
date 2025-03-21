import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-grow: 1;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #206f63;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s;

  &:hover {
    color: #179d8e;
  }
`;

export const Button = styled.button`
  border: none;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: white;
  background-color: hsl(120, 100%, 30%);

  ${({ $done }) =>
    $done &&
    css`
      background-color: hsl(120, 100%, 30%);
      &:hover {
        background-color: hsl(120, 100%, 26%);
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(0, 100%, 60%);
      &:hover {
        background-color: hsl(0, 100%, 70%);
      }
    `}
`;
