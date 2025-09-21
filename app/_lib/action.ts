"use server"

import { connectDB } from "./mongodb";
import Todo from "../models/Todo";
// import { revalidatePath } from "next/cache";

export async function addTodo(formdata:FormData) {
    await connectDB()

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


// export async function deleteTodo(formdata:FormData) {
//     const todoDelete = await Todo.findByIdAndDelete(formdata.id) ;

//     if(!todoDelete) {
//         throw new Error("Todo not found")
//     }

//     return JSON.parse(JSON.stringify(deleteTodo))
// }