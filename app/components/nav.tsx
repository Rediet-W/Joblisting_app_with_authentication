"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div>
      <nav
        className="flex justify-end items-center h-16 bg-violet-200 text-violet-700 relative shadow-sm font-mono space-x-2 p-3"
        role="navigation"
      >
        {status === "authenticated" ? (
          <>
            {/* <h2>Hello {session?.user?.name}</h2> */}
            <button
              onClick={handleSignOut}
              className="w-fit font-bold py-2 px-4 m-2 rounded-full bg-transparent text-center text-violet-700 mt-12 mb-8 border border-violet-700"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Please log in</p>
        )}
      </nav>
    </div>
  );
};

export default Nav;
