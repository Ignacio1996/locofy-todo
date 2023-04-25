import styles from "./to-do-incomplete.module.css";
const ToDoIncomplete = ({ taskValue, index, toggle, deleteTodo }) => {
  return (
    <div className={styles.todoincomplete}>
      <img
        className={styles.image2Icon}
        alt=""
        src="/image-2@2x.png"
        onClick={() => toggle(index)}
      />
      <div className={styles.makeResponsiveOn}>{taskValue}</div>
    </div>
  );
};

export default ToDoIncomplete;
