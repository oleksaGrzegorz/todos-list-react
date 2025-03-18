import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Button, StyledForm } from "./styled";
import { addTask, fetchExampleTasks } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

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

  return (
    <>
      <Button onClick={()=>dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>
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
