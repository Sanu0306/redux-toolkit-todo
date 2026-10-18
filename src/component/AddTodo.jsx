import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../fetures/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-lg mx-auto mt-6 mb-6"
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 min-w-0 bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
