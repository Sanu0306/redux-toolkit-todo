import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../fetures/todoSlice";

const EditTodo = ({ todo, onCancel }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const updateHandler = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      updateTodo({
        id: todo.id,
        text: text.trim(),
      }),
    );

    onCancel();
  };

  return (
    <form onSubmit={updateHandler} className="flex flex-1 gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-w-0 flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
      >
        Save
      </button>

      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTodo;
