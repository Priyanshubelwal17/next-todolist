"use server"

import { connectDB } from "./mongodb";
import Todo from "../models/Todo";
import { error } from "console";
// import { revalidatePath } from "next/cache";

export async function addTodo(formdata:FormData) {
    await connectDB()
    console.log(formdata);
    const title = formdata.get("title") as string  ;
    console.log(formdata);
    if(!title || title.trim()===""){
        throw new Error("Title is required")
    }
    

    const todo = new Todo({title}) ;
    await todo.save()

    return JSON.parse(JSON.stringify(todo))

    // revalidatePath('/todolist')
}

export async function updateTodo(updateId:string,newTitle:string) {
  console.log(updateId);
  const updateTodo = await Todo.findByIdAndUpdate(updateId,{title:newTitle}) ;
  console.log(updateTodo);
  if(!updateTodo) {
    throw new Error("Todo is not updated")
console.log(error);

  }
  return JSON.parse(JSON.stringify(updateTodo))
}

export async function deleteTodo(deleteId:any) {
  const deleteTodo = await Todo.findByIdAndDelete(deleteId) ;
  if(!deleteTodo) {
    throw new Error("Todo is not deleting")
  }
  return JSON.parse(JSON.stringify(deleteTodo))
}
