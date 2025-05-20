"use client";

import DashboardCard from "@/components/dashboarCard";
import ProductForm from "@/components/dashboarFormProduct";
import Image from "next/image";
import { useState } from "react";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "product", src: "Chat" },
    { title: "categories", src: "User", gap: true },
    { title: "accessories ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
  ];

  return (
    <div className="flex " dir="rtl">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 mt-0  pt-8 relative duration-300 bg-blue-500 `}>
        <Image
          alt="icon"
          src="/control.png"
          className={`absolute cursor-pointer -left-5 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            alt="title"
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
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index && "bg-blue-500"} `}>
              <Image
                alt="icons"
                src={`/${Menu.src}.png`}
                width={40}
                height={40}
              />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-xl`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex flex-col w-full h-full  ">
        <div className=" h-full mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mr-10 overflow-hidden">
          <DashboardCard date="2025/05/24" total={32} />
          <DashboardCard date="kimo" total={32} />
          <DashboardCard date="kimo" total={32} />
          <DashboardCard date="kimo" total={32} />
        </div>
        <div className="w-4/6 md:w-full">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};
export default App;
