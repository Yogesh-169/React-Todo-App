import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const Welcome = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default Welcome;
