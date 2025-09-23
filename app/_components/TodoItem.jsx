"use client"

import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../_lib/action";
import EditButton from "./EditButton";


function TodoItem ({T})  {
  const [initialTitle,setTitle] = useState(T.title) ;
  const [isEdit,setEdit] = useState(false) ;

async function editTitle(T,newTitle) {
console.log(T.id);
  await updateTodo(T.id,newTitle)
  setEdit(false)

}

  return (
   <div className=" " >
    <li key={T.id}>
            {isEdit?   <input type="text" value={initialTitle} onChange={(e)=>setTitle(e.target.value)} />:T.title
   
            } - Created on: {T.createdAt}{" "}
          </li>

          <button onClick={()=>deleteTodo(T.id)} className="flex inline-flex bg-amber-400 " >delete</button>
          <EditButton  onEdit={editTitle} setEdit={setEdit} edit={isEdit} initialTitle={initialTitle}  Todo={T} />
   </div>

     );
};

export default TodoItem;