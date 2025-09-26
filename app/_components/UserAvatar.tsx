import { auth } from "@/auth";

export default async function UserAvatar() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="">
      <img
        className="rounded-full h-12"
        src={session?.user?.image}
        alt="User Avatar"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
