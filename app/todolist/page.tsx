import React from "react";
import TodoForm from "../_components/TodoForm";
import Todo from "../models/Todo";
import { connectDB } from "../_lib/mongodb";
import TodoItem from "../_components/TodoItem";
import { SignOut } from "../_components/signout-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function getAllTodos() {
  const session = await auth();

  if (!session) {
    redirect("/Signinfirst");
  }

  const userId = session?.user?.id;

  await connectDB();
  const todos = await Todo.find({
    userId: userId,
  }).sort({ createdAt: -1 });

  return todos.map((todo) => ({
    id: todo._id.toString(),
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toString(),
  }));
}

async function Page() {
  const todos = await getAllTodos();

  return (
    <main className="bg-gradient-to-tr from-blue-50 via-gray-100 to-gray-200 min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounder-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 "> Your Todo List</h2>

        <TodoForm />

        <ul className="divide-y divide-gray-200">
          {todos.map((T) => (
            <TodoItem key={T.id} T={T} />
          ))}
        </ul>

        <div className="flex justify-end">
          <SignOut />
        </div>
      </div>
    </main>
  );
}

export default Page;
