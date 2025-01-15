import "./style.css";

const Buttons = (props) =>
  props.tasks.length > 0 && (
    <div className="section__buttons">
      <button className="section__button--secondary">
        {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="section__button--secondary"
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
