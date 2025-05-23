"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Dashboardlayout = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", url: "/dashboard" },
    { title: "cars", src: "Chat", url: "/dashboard/cars/addCar/new" },
    {
      title: "categories",
      src: "User",
      gap: true,
      url: "/dashboard/categories",
    },
    {
      title: "accessories ",
      src: "Calendar",
      url: "/dashboard/accessories",
    },
  ];

  return (
    <div className=" hidden md:flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-full p-5 mt-0  pt-8 relative duration-300 bg-blue-500 `}>
        <Image
          alt="icon"
          width={40}
          height={40}
          src="/control.png"
          className={`absolute cursor-pointer -left-5 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            alt="title"
            width={40}
            height={40}
            src="/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />

          <h1
            className={`text-black origin-left font-larg text-xl duration-200 ${
              !open && "scale-0"
            }`}>
            Admin
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <Link href={`${Menu.url}`} key={index}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index && "bg-blue-500"} `}>
                <div>
                  <Image
                    alt="icons"
                    src={`/${Menu.src}.png`}
                    width={40}
                    height={40}
                  />
                </div>
                <div
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-xl`}>
                  {Menu.title}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboardlayout;
