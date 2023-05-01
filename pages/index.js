import Header from "../components/header";
import ToDoComplete from "../components/to-do-complete";
import ToDoIncomplete from "../components/to-do-incomplete";
import AddToDo from "../components/add-to-do";
import styles from "./index.module.css";
const ToDoListDesign = () => {
  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <Header listTitle="To Do" />
        <div className={styles.divider} />
        <ToDoComplete taskValue="Finish designs" />
        <ToDoIncomplete taskValue="Make responsive on Figma" />
        <div className={styles.divider} />
        <AddToDo />
      </div>
    </div>
  );
};

export default ToDoListDesign;
