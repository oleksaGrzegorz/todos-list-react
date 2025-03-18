import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectTaskByQuery,
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const { hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item $hidden={task.done && hideDone} key={task.id}>
          <Button $done={task.done} onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content $done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
