"use client"

import React from "react";
import { addTodo } from "../_lib/action";



function TodoForm ()  {
  return (
  <div className="scale-[1.01">
    <form action={addTodo} className="bg-neutral-600  py-10 px-16 text-lg flex gap-5 flex-col" >
      <div>
        <input type="text" name="title" />
        <button className="" type="submit" >add</button>
      </div>
    </form>
  </div>
  );
};

export default TodoForm;