import Form from "./Form";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useEffect } from "react";
import useTasks from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const { tasks, addNewTask, markAllDone, toggleTaskDone, removeTask } =
    useTasks();

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
