import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        className="bg-red-600 rounded-lg transition-colors font-semibold shadow text-white px-6 px-2 hover:bg-red-700"
        type="submit"
      >
        {" "}
        Sign Out
      </button>
    </form>
  );
}
