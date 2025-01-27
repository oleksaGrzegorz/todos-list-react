import { useState } from "react";
import { useRef } from "react";


const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onFormSubmit} className="section__form">
      <input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="section__input"
        placeholder="Co jest do zrobienia?"
      />
      <button className="section__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;