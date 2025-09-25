import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "./app/_lib/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [Google],
});
