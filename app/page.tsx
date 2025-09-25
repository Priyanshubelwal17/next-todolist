import { auth } from "@/auth";
import Link from "next/link";
import SignIn from "./_components/sign-in";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div>
        <h1> Welcome to my haggu si todolist {session?.user?.name}! </h1>
        <Link href={"/todolist"}>Haggu-Todolist</Link>
        <SignIn />
      </div>
    </>
  );
}
