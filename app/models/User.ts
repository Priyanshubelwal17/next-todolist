// https://www.instagram.com/ayush4lyfe/reels/

import mongoose, { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
});

const User = models.User || model("User", UserSchema);
export default User;
