import React from "react";

export default function EditButton({Todo,onEdit,setEdit,edit,initialTitle}:any):any {
  console.log(Todo.id);
    return (

        <>
        {edit?
  (  <button className="bg-green-500" onClick={()=>onEdit(Todo.id,initialTitle)} >
    Save
    </button>

  ):(
    <button className="bg-amber-800  " onClick={()=>setEdit(true)} >Edit</button>
  )
}
        </>

        
    )
}

