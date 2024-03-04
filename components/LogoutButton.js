"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

const LogoutButton = () => {
  return (
    <>
      <Link
        href="/posts"
        className="text-sm uppercase border text-white px-8 py-1.5 rounded-md hover:bg-white hover:text-black duration-400"
      >
        posts
      </Link>
      <button
        onClick={signOut}
        className="text-sm uppercase border text-white px-6 py-1.5 rounded-md hover:bg-white hover:text-black duration-400"
      >
        Log out
      </button>
    </>
  );
};

export default LogoutButton;
