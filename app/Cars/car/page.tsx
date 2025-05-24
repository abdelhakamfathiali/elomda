// app/products/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
type Car = {
  _id: string;
  name: string;
  model: string;
  year: string;
  price: number;
  images: [string];
};
export default function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/api/cars", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {cars.map((car: Car) => (
        <div
          key={car._id}
          className="flex w-[80%] h-[400px] bg-gray-50 border rounded-xl items-center justify-center ">
          <h3 className="text-black text-xl p-5">{car.name}</h3>
          <h1 className="text-black text-xl"> {car.model}</h1>
          <h2 className="text-black text-xl">{car.year}</h2>
          <h2 className="text-black text-xl">{car.price}</h2>
          {car.images.map((img: string, index: number) => (
            <Image
              key={index}
              src={`${img}`}
              alt={car.name}
              width={300}
              height={200}
            />
          ))}
          {/* <Image src={car.images[0]} alt={car.name} width={300} height={200} /> */}
        </div>
      ))}
    </div>
  );
}
