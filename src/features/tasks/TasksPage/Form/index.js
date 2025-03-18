import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Button, FetchExampleTasksButton, StyledForm, FetchExampleTasksContainer} from "./styled";
import { addTask, fetchExampleTasks } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return;
  
    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  const handleFetchExampleTasks = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      dispatch(fetchExampleTasks());
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <FetchExampleTasksContainer>
      <FetchExampleTasksButton 
          onClick={handleFetchExampleTasks} 
          disabled={isLoading}
        >
          {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </FetchExampleTasksButton>
      </FetchExampleTasksContainer>

      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          placeholder="Co jest do zrobienia?"
        />
        <Button>Dodaj zadanie</Button>
      </StyledForm>
    </>
  );
};

export default Form;
