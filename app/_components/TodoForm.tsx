"use client";

import React from "react";
import { addTodo } from "../_lib/action";

function TodoForm() {
  return (
    <form className="w-full flex gap-3" action={addTodo}>
      <div>
        <input
          className="flex-grow border border-gray-300 rounded0lg px-4 py-2 text-shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="title"
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
          type="submit"
        >
          add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
