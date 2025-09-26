import React from "react";
import SignIn from "./sign-in";

function PleaseSignin() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 px-6 py-12 ">
      <div className="max-w-md w-full bg-white rounded-3xl justify-center items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Please Sign In First
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          You need to be signed in to access this content. Click the button
          below to sign in and start managing your todos.
        </p>
      </div>
      <div className="flex justify-center">
        <SignIn />
      </div>
    </main>
  );
}

export default PleaseSignin;
