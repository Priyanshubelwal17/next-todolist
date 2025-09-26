"use client";

import React, { useState } from "react";
import { deleteTodo, toggleTodo, updateTodo } from "../_lib/action";
import EditButton from "./EditButton";

function TodoItem({ T }) {
  console.log(T);
  const [initialTitle, setTitle] = useState(T.title);
  const [isEdit, setEdit] = useState(false);

  async function editTitle() {
    await updateTodo(T.id, initialTitle);
    setEdit(false);
  }

  return (
    <li
      className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      key={T.id}
    >
      <label className="flex items-center gap-3 flex-grow cursor-pointer select-none">
        <input
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue focus:ring-2"
          type="checkbox"
          checked={T.completed}
          onChange={() => toggleTodo(T.id, T.completed)}
        />
        {isEdit ? (
          <input
            type="text"
            value={initialTitle}
            className="flex-grow border border-gray-300 rounded-md px-3 py-1 focus:outline-none foucus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span
            className={` flex-grow text-gray-900 ${
              T.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {T.title}
          </span>
        )}
      </label>
      <div className="flex items-center gap-3 ml-4">
        <span className="text-sx text-gray-500 whitespace-nowrap">
          - Created on: {T.createdAt}{" "}
        </span>
        <button
          onClick={() => deleteTodo(T.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition"
        >
          delete
        </button>
        {isEdit ? (
          <button
            className="bg-green-500 text-white px-3 py-1 rounded-md shadow hover:bg-green-600 transition"
            onClick={editTitle}
            className="bg-green-500"
          >
            Save
          </button>
        ) : (
          <button
            className="bg-amber-600 text-white px-3 py-1 rounded-md shadow hover:bg-amber-700 transition"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
