import { useSelector, useDispatch } from "react-redux";
import { ButtonsSection, Button } from "./styled";
import { selectTasks, toggleHideDone, markAllDone } from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <ButtonsSection>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(markAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsSection>
    )
  );
};

export default Buttons;
