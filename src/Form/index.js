import { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  };

  return (
    <form onSubmit={onFormSubmit} className="section__form">
      <input
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
