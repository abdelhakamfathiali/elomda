"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description || !quantity || !price) {
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
          quantity,
          price,
        }),
      });
      if (res) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-4 w-full  shadow-xl ">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 border">
        <form onSubmit={handleSubmit} className="mb-0 space-y-6 ">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-3xl color-amazonBlue">Add New Product </h1>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700">
              productName
            </label>
            <div className="mt-1">
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
              className="block text-lg font-medium text-gray-700">
              description
            </label>
            <div className="mt-1">
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

          <label
            htmlFor="quantity"
            className="block text-lg font-medium text-gray-700">
            quantity
          </label>
          <div className="mt-1">
            <input
              id="quantity"
              name="quantity"
              type="text"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shodow-sm focus:outline-none
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700">
            Price
          </label>
          <div className="mt-1">
            <input
              id="price"
              name="price"
              type="text"
              required
              onChange={(e) => setPrice(e.target.value)}
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
