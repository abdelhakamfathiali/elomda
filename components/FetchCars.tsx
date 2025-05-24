// app/products/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
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
    <div className="grid grid-cols-1  md:grid-cols-2  items-center justify-between xl:grid-cols-2   gap-2 w-full">
      {cars.map((car: Car) => (
        <div
          key={car._id}
          className="flex-col w-full  h-[500px] gap-5 border rounded-xl items-center justify-between md:flex ">
          <div className="flex  p-2 justify-between  ">
            <h3 className="text-black text-xl p-5">Car : {car.name}</h3>
            <h1 className="text-black text-xl p-5">Model: {car.model}</h1>
            <h2 className="text-black text-xl p-5">
              Year: {car.year.slice(0, 4)}
            </h2>
            <h2 className="text-black text-xl p-5"> Price: {car.price}</h2>{" "}
          </div>
          <div className="w-full h-[80%] md:w-full">
            <Link href={`/Cars/carDetails/${car._id}`}>
              <Image
                src={car.images[0]}
                alt={car.name}
                width={300}
                height={200}
                className="w-full h-full p-2"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* {car.images.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              alt={car.name}
              width={300}
              height={200}
            />
          ))} */
}
