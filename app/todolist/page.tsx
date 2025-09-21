import React from "react";
import TodoForm from "../_components/TodoForm";
import Todo from "../models/Todo";




async function getAllTodos() {
  const todos = await Todo.find() ;
console.log(todos);
  return todos
}



async function Page ()  {
const todos =  await getAllTodos()

  return (
   <div>
    <TodoForm/>

   <ul> 
  {todos.map((T)=>(
  <li key={T.id} >{T.title} - Created on: {T.createdAt.toLocaleDateString()} </li>
  ))}
</ul>
   </div>
  );
};

export default Page;