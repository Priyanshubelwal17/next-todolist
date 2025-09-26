import { auth } from "@/auth";
import Link from "next/link";
import SignIn from "./_components/sign-in";
import { SignOut } from "./_components/signout-button";
import UserAvatar from "./_components/UserAvatar";

export default async function Home() {
  const session = await auth();

  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-lg p-8 bg-white rounderd-2xl shadow-md space-y-6">
        <h1 className="text-3xl  font-semibold text-gray-900">
          Welcome{" "}
          {session ? (
            <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-lg shadow-sm font-bold">
              {" "}
              {session?.user?.name}
            </span>
          ) : (
            <span className="font-semibold inline-block text-3xl ">
              Please SignIn
            </span>
          )}
        </h1>
        <Link
          className="inline-block px-6 py-3 rounded-lg bg-purple-400 text-white font-medium shadow hover:bg-blue-700 transition-colors"
          href={"/todolist"}
        >
          Haggu-Todolist
        </Link>
        <div className="flex items-center gap-4">
          {session ? <SignOut /> : <SignIn />}
          <UserAvatar />
        </div>
      </div>
    </main>
  );
}
