"use client"

import React from "react";
import { addTodo } from "../_lib/action";



function TodoForm ()  {
  return (
  <div className="scale-[1.01">
    <form action={addTodo} className="" >
      <div>
        
        <input className="border" type="text" name="title" />
        <button className="" type="submit" >add</button>
      </div>
    </form>
  </div>
  );
};

export default TodoForm;