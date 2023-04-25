import { useState } from "react";
import Header from "../components/header";
import ToDoComplete from "../components/to-do-complete";
import ToDoIncomplete from "../components/to-do-incomplete";
import styles from "./index.module.css";
const ToDoListDesign = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // add
  const add = (event) => {
    if (event.key === "Enter") {
      let copyTodos = [...todos];
      copyTodos.push({ value: event.target.value, done: false });
      setTodos(copyTodos);
      setInput("");
    }
  };

  // toggle
  const toggle = (index) => {
    let copyTodos = [...todos];
    copyTodos[index].done = !copyTodos[index].done;
    setTodos(copyTodos);
  };

  // delete
  const deleteTodo = (index) => {
    let copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <Header />
        <div className={styles.divider} />
        {todos.map((todo, index) => {
          if (todo.done) {
            return (
              <ToDoComplete
                index={index}
                toggle={toggle}
                deleteTodo={deleteTodo}
                taskValue={todo.value}
              />
            );
          } else {
            return (
              <ToDoIncomplete
                index={index}
                toggle={toggle}
                deleteTodo={deleteTodo}
                taskValue={todo.value}
              />
            );
          }
        })}

        <div className={styles.divider} />
        <input
          className={styles.addToDo}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add to do..."
          onKeyDown={add}
        />
      </div>
    </div>
  );
};

export default ToDoListDesign;
