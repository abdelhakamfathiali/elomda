"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessoryForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description) {
      setError("All fields are required");
      return error;
    }

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });
      if (res) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-20 w-[70%] h-screen  min-w-sm " dir="ltr">
      <div className="bg-white py-8 px-1 shadow rounded-lg sm:px-10  min-w-sm">
        <form onSubmit={handleSubmit} className="mb-0 space-y-6 ">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-3xl color-amazonBlue">Add New accessory</h1>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mt-4 ">
              Name
            </label>
            <div className="mt-4">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mt-4">
              Price
            </label>
            <div className="mt-4">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mt-4">
              Quantity
            </label>
            <div className="mt-4">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 mt-4">
              description
            </label>
            <div className="mt-4">
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <button
              type="submit"
              className=" flex justify-center py-2 px-4 border w-1/4 
            border-transparent rounded-md shadow-sm text-md font-medium bg-amazonBlue
             text-white hover:bg-amazonLight/50 focus:outline-none
             focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue-500">
              Add new accessory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
