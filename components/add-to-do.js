import styles from "./add-to-do.module.css";
const AddToDo = () => {
  return (
    <input className={styles.addToDo} type="text" placeholder="Add to do..." />
  );
};

export default AddToDo;
