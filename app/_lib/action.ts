"use server";

import { connectDB } from "./mongodb";
import Todo from "../models/Todo";
import { error } from "console";
import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";

export async function addTodo(formdata: FormData) {
  await connectDB();
  console.log(formdata);
  const title = formdata.get("title") as string;
  console.log(formdata);
  if (!title || title.trim() === "") {
    throw new Error("Title is required");
  }

  const todo = new Todo({
    title,
    completed: false,
  });
  await todo.save();

  revalidatePath("/todolist");
  return JSON.parse(JSON.stringify(todo));
}

export async function updateTodo(updateId: string, newTitle: string) {
  console.log(updateId);
  const updateTodo = await Todo.findByIdAndUpdate(updateId, {
    title: newTitle,
  });
  console.log(updateTodo);
  if (!updateTodo) {
    throw new Error("Todo is not updated");
    console.log(error);
  }
  revalidatePath("/todolist");
  return JSON.parse(JSON.stringify(updateTodo));
}

export async function deleteTodo(deleteId: any) {
  const deleteTodo = await Todo.findByIdAndDelete(deleteId);
  if (!deleteTodo) {
    throw new Error("Todo is not deleting");
  }
  revalidatePath("/todolist/");
  return JSON.parse(JSON.stringify(deleteTodo));
}

export async function toggleTodo(toggleId: string, completed: boolean) {
  const todo = await Todo.findByIdAndUpdate(
    toggleId,
    {
      completed: !completed,
    },
    { new: true }
  );
  console.log(todo.completed);
  if (!todo) throw new Error("Todo not found");

  revalidatePath("/todolist");

  return JSON.parse(JSON.stringify(todo));
}
