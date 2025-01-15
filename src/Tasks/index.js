import "./style.css";

const Tasks = ({tasks, removeTask, hideDone, toggleTaskDone}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDone ? "tasksItemHidden" : ""
        }`}
      >
        <button 
          onClick={()=>toggleTaskDone(task.id)}
          className={`doneButton${task.done ? " doneButton--done" : ""}`}
        >
          {task.done ? "✓" : ""}
        </button>
        <span
          className={`list__itemContent
          ${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="removeButton"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
