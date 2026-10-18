import React, { useState } from "react";
import { removeTodo } from "../fetures/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import EditTodo from "./EditTodo";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);

  return (
    <div className="w-full max-w-lg mx-auto mt-6 p-5 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        My Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 py-5">
          No todos yet. Add your first todo!
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
            >
              {editId === todo.id ? (
                <EditTodo todo={todo} onCancel={() => setEditId(null)} />
              ) : (
                <>
                  <span className="text-gray-800 font-medium break-all">
                    {todo.text}
                  </span>

                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setEditId(todo.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="bg-red-400 hover:bg-black-600 text-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
