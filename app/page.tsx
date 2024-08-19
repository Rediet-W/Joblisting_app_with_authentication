"use client";

import React, { useEffect, useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if the accessToken exists in localStorage
    const token = localStorage.getItem("accessToken");

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Nav />
      {isAuthenticated ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
