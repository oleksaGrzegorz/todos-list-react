import Form from "./Form";
import Section from "../../common/Section";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useState } from "react";
import { useEffect } from "react";
import useTasks from "../../useTasks";

function Tasks() {
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
          <TaskList
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

export default Tasks;
