import React from "react";
import TodoForm from "../_components/TodoForm";
import Todo from "../models/Todo";
import { connectDB } from "../_lib/mongodb";
import TodoItem from "../_components/TodoItem"

async function getAllTodos() {
  await connectDB();
  const todos = await Todo.find({});
  
  return todos.map(todo=>({
    id: todo._id.toString(),
    title:todo.title,
    createdAt:todo.createdAt.toString()
  }));
}

async function Page() {
  const todos = await getAllTodos();

  return (
    <div>
      <TodoForm />

      <ul>
        {todos.map((T) => (
         <TodoItem key={T.id} T={T} />
        ))}
      </ul>
    </div>
  );
}

export default Page;
