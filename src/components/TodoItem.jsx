import React from "react";

function TodoItem({ allTodo, setAllTodo }) {
  function handleRemove(id) {
    let newArray = allTodo.filter((item) => item.id !== id);
    setAllTodo(newArray);
  }

  return (
    <div className="">
      {allTodo.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-blue-400 p-3"
        >
          <h3>{item.title}</h3>
          <button
            onClick={() => handleRemove(item.id)}
            className="border border-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
