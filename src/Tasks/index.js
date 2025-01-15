import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        className={`list__item ${
          task.done && props.hideDone ? "tasksItemHidden" : ""
        }`}
      >
        <button className={`doneButton${task.done ? " doneButton--done" : ""}`}>
          {task.done ? "✓" : ""}
        </button>
        <span
          className={`list__itemContent 
                ${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button
        className="removeButton">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
