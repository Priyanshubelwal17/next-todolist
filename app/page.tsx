import Link from "next/link";


export default function Home() {
  return (
<>
  <div>
    <h1> Welcome to my haggu si todolist</h1>
    <Link href={"/todolist"} >Haggu-Todolist</Link>
  </div>

</>
  );
}
