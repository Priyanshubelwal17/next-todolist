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
    <div className=" ">
      <li key={T.id}>
        <input
          type="checkbox"
          checked={T.completed}
          onChange={() => toggleTodo(T.id, T.completed)}
        />
        {isEdit ? (
          <input
            type="text"
            value={initialTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span className={`${T.completed ? "line-through" : ""}`}>
            {T.title}
          </span>
        )}{" "}
        - Created on: {T.createdAt}{" "}
        <button
          onClick={() => deleteTodo(T.id)}
          className="flex inline-flex bg-amber-400 "
        >
          delete
        </button>
        {isEdit ? (
          <button onClick={editTitle} className="bg-green-500">
            Save
          </button>
        ) : (
          <button onClick={() => setEdit(true)} className="bg-amber-800  ">
            Edit
          </button>
        )}
      </li>
    </div>
  );
}

export default TodoItem;
