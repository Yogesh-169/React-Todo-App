import { useState } from "react";

function AddTodo({ handleNewItems }) {
  const [AddTodo, setTodoName] = useState("");
  const [AddDate, setTodoDate] = useState("");

  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    handleNewItems(AddTodo, AddDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={AddTodo}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={AddDate} onChange={handleTodoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
