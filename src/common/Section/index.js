import { StyledSection, Title, Header } from "./styled";

const Section = (props) => (
  <StyledSection>
    <Title>
      <Header>{props.title}</Header>
      {props.extraHeaderContent}
    </Title>
    {props.body}
  </StyledSection>
);

export default Section;
