import styled, { css } from "styled-components";
export const ButtonsSection = styled.div`
  @media (max-width: 757px) {
    display: grid;
  }
`;

export const Button = styled.button`
  color: hsl(180, 100%, 25%);
  border: none;
  background-color: white;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ccc;
      cursor: not-allowed;
    `}

  &:hover {
    color: hsl(180, 100%, 30%);
  }
`;
