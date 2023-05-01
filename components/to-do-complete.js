import styles from "./to-do-complete.module.css";
const ToDoComplete = ({ taskValue }) => {
  return (
    <div className={styles.todocomplete}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.finishDesigns}>{taskValue}</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default ToDoComplete;
