import { useState } from "react";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  return (
    <form className="section__form">
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
