"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the accessToken exists in localStorage
    const token = localStorage.getItem("accessToken");
    const name = localStorage.getItem("userName");

    if (token) {
      setIsAuthenticated(true);
      setUserName(name);
    }
  }, []);

  const handleSignOut = () => {
    // Clear the accessToken and userName from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");

    // Optionally redirect to a login page or home page
    router.push("/login");
  };

  return (
    <div>
      <nav
        className="flex justify-end items-center h-16 bg-violet-200 text-violet-700 relative shadow-sm font-mono space-x-2"
        role="navigation"
      >
        {isAuthenticated ? (
          <>
            <h2>{userName}</h2>
            <button
              onClick={handleSignOut}
              className="w-fit font-bold py-2 px-4 rounded-full bg-transparent text-center text-violet-700 mt-12 mb-8 border border-violet-700"
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
