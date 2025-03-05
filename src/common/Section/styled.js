import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
  border: 2px solid hsl(0, 6%, 87%);
  word-break: break-word;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid hsl(0, 6%, 87%);

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h2`
  padding: 0 0 5px 10px;
`;
