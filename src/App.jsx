import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ]);

  const handleNewItems = (ItemName, ItemDueDate) => {
    const newItems = [...todoItems, { name: ItemName, dueDate: ItemDueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItems={handleNewItems} />
      {todoItems.length === 0 && <Welcome todoItems={todoItems} />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
