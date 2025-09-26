"use client";

import React, { useState, useEffect, useRef } from "react";
import { deleteTodo, toggleTodo, updateTodo } from "../_lib/action";

function TodoItem({ T }) {
  const [initialTitle, setTitle] = useState(T.title);
  const [isEdit, setEdit] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  async function editTitle() {
    if (initialTitle.trim() === "") {
      setTitle(T.title); // Reset if empty
      setEdit(false);
      return;
    }
    await updateTodo(T.id, initialTitle);
    setEdit(false);
  }

  const createdDate = new Date(T.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <li
      key={T.id}
      className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow mb-3 relative"
    >
      <label className="flex items-center gap-3 flex-grow cursor-pointer select-none min-w-0 relative">
        <input
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 flex-shrink-0"
          type="checkbox"
          checked={T.completed}
          onChange={() => toggleTodo(T.id, T.completed)}
        />
        {/* Display text */}
        <span
          className={`block flex-grow truncate transition-opacity duration-300 absolute left-8 top-1/2 -translate-y-1/2 ${
            isEdit ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${T.completed ? "line-through text-gray-400" : "text-gray-900"}`}
          aria-hidden={isEdit}
        >
          {T.title}
        </span>

        {/* Editable input */}
        <input
          ref={inputRef}
          type="text"
          value={initialTitle}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={editTitle}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              editTitle();
            }
            if (e.key === "Escape") {
              setInitialTitle(T.title);
              setEdit(false);
            }
          }}
          className={`absolute left-8 top-1/2 -translate-y-1/2 w-full px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-opacity duration-300 ease-in-out ${
            isEdit ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          aria-hidden={!isEdit}
        />
      </label>

      <div className="flex flex-col items-end ml-4 min-w-max gap-1">
        <span className="text-xs text-gray-500 whitespace-nowrap">
          Created: {T.createdAt}
        </span>

        <div className="flex gap-2">
          {isEdit ? (
            <button
              onClick={editTitle}
              className="bg-green-500 text-white px-3 py-1 rounded-md shadow hover:bg-green-600 transition"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEdit(true)}
              className="bg-amber-600 text-white px-3 py-1 rounded-md shadow hover:bg-amber-700 transition"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => deleteTodo(T.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
