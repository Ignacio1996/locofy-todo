import styles from "./index.module.css";
const ToDoListDesign = () => {
  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <div className={styles.header}>
          <div className={styles.titleNotes}>
            <div className={styles.toDo}>To Do</div>
            <b className={styles.userFeedbackTomorrow}>
              User feedback tomorrow!
            </b>
          </div>
          <div className={styles.emoji}>
            <div className={styles.div}>🌤️</div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.todocomplete}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.finishDesigns}>Finish designs</div>
        </div>
        <div className={styles.todoincomplete}>
          <img className={styles.image1Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.finishDesigns}>Make responsive on Figma</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.addToDo}>Add to do...</div>
      </div>
    </div>
  );
};

export default ToDoListDesign;
