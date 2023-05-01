import styles from "./header.module.css";
const Header = ({ listTitle }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleNotes}>
        <div className={styles.toDo}>{listTitle}</div>
        <div className={styles.userFeedbackTomorrow}>
          User feedback tomorrow!
        </div>
      </div>
      <div className={styles.emoji}>
        <div className={styles.div}>🌤️</div>
      </div>
    </div>
  );
};

export default Header;
