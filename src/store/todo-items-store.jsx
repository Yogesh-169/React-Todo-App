import { createContext, useState } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (ItemName, ItemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: ItemName, dueDate: ItemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
