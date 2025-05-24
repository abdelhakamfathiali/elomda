// app/products/new/page.tsx
"use client";

import { useState } from "react";

export default function AddCarForm() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("price", price);
    if (images) {
      Array.from(images).forEach((file) => {
        formData.append("images", file);
      });
    }

    const res = await fetch("/api/cars", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("car added!");
    } else {
      alert("Error adding car");
    }
  };

  return (
    <div className="flex items-start mt-20 h-screen justify-center w-[70%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 flex flex-col w-full gap-10 ">
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full md:border p-2  text-black md:w-[70%] h-[70px] rounded-lg text-2xl"
        />
        <input
          type="text"
          placeholder="car model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full md:border p-2  text-black md:w-[70%] h-[70px] rounded-lg text-2xl"
        />
        <input
          type="text"
          placeholder=" car year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full md:border p-2  text-black md:w-[70%] h-[70px] rounded-lg text-2xl"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full md:border p-2  text-black md:w-[70%] h-[70px] rounded-lg text-2xl"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setImages(e.target.files)}
          className="w-full md:border p-2  text-black md:w-[70%] h-[70px] rounded-lg text-2xl"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-[200px]">
          Add Car
        </button>
      </form>
    </div>
  );
}
