import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze"/>
        <Section title="Grzegorz Oleksa" body={<>Tekst</>}/>
    </Container>
);

export default AuthorPage;