"use client";

import React from "react";
import { addTodo } from "../_lib/action";

function TodoForm() {
  return (
    <form className="w-full flex gap-3 mb-6" action={addTodo}>
      <input
        className="grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
      />
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
