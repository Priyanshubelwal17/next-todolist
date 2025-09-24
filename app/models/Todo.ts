import mongoose, { Schema, models } from "mongoose";

const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: true, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Todo = models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
