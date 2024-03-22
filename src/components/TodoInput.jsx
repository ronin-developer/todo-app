import React, { useState } from "react";

function TodoInput({ allTodo, setAllTodo }) {
  const [inputValue, setInputvalue] = useState("");

  function handleInputValue(e) {
    setInputvalue(e.target.value);
  }

  function handleTodoItem() {
    setAllTodo([...allTodo, { id: new Date().getTime(), title: inputValue }]);
    setInputvalue("");
  }

  return (
    <div className="mb-8">
      <input
        onChange={handleInputValue}
        value={inputValue}
        className="border p-2 py-1"
        type="text"
        placeholder="Add new TODO"
      />
      <button
        onClick={handleTodoItem}
        className="border text-red-600 px-2 py-1"
      >
        Add TODO
      </button>
    </div>
  );
}

export default TodoInput;
