"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" mt-4 sm:mx-auto sm:w-full sm:max-w-xl shadow-xl">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 border">
        <form className="mb-0 space-y-6 " method="POST">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-3xl color-amazonBlue">Create Your Account </h1>
            <div className="flex gap-4">
              <p className="text-lg">Don't have account ?</p>
              <Link href="/register" className="text-lg text-blue-950">
                Sign Up
              </Link>
            </div>
          </div>
          <div></div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700">
              email
            </label>
            <div className="mt-1">
              <input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700">
            password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border
            border-transparent rounded-md shadow-sm text-md font-medium bg-amazonBlue
             text-white hover:bg-amazonLight/50 focus:outline-none
             focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue-500">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
