import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section 
            title="Grzegorz Oleksa" 
            body={
                <>
                    <p><strong>Moją ogromną pasją jest programowanie.</strong> Tworzę aplikacje webowe od kilku lat, a moją specjalizacją jest <em>React</em> oraz <em>JavaScript</em>. Lubię uczyć się nowych technologii i rozwijać swoje umiejętności.</p>
                    <p><strong>Eksperymentuję, koduję, uczę się, tworzę.</strong> W wolnym czasie gram w gry strategiczne i śledzę nowinki technologiczne. 🚀</p>
                    <p>Nie zdajecie sobie sprawy z tego, <em>jak bardzo</em> pasjonuje mnie świat IT!</p>
                </>
            } 
        />
    </Container>
);

export default AuthorPage;
