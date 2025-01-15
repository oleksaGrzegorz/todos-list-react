import React from "react";
import Form from "./Form";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zad1", done: true },
  { id: 2, content: "zad2", done: false },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title={"Lista zadań"}/>
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone}/>}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
