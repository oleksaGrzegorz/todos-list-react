import {List, Item, Content} from "./styled";

const Tasks = ({tasks, removeTask, hideDone, toggleTaskDone}) => (
  <List>
    {tasks.map((task) => (
      <Item
        hidden={task.done && hideDone}
        key={task.id}
      >
        <button 
          onClick={()=>toggleTaskDone(task.id)}
          className={`doneButton${task.done ? " doneButton--done" : ""}`}
        >
          {task.done ? "✓" : ""}
        </button>
        <Content
          done={task.done}
          className={`list__itemContent
          ${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </Content>
        <button
          onClick={() => removeTask(task.id)}
          className="removeButton"
        >
          🗑
        </button>
      </Item>
    ))}
  </List>
);

export default Tasks;
