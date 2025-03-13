import styled from "styled-components";
export const Button = styled.button`
  color: white;
  background-color: hsl(180, 100%, 25%);
  padding: 10px;
  border: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.05);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  margin: 10px;

  @media (max-width: 757px) {
    flex-direction: column;
  }
`;
