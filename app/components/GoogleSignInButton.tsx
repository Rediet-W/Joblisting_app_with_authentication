"use client";
import React from "react";
import { signIn } from "next-auth/react";

const GoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="border border-[#33357c] w-full flex justify-center p-4  mb-2"
    >
      <img src="./google.png" alt="google" className="w-6 h-6" />
      <p className="text-[#33357c]  "> Sign Up with Google</p>
    </button>
  );
};

export default GoogleSignInButton;
