import Image from "next/image";
import Link from "next/link";
import React from "react";
type Cat = {
  id: number;
  name: string;
  imageUrl: string;
};
const CategoryCard = ({ category }: { category: Cat }) => {
  return (
    <div
      className="border-2 flex h-full rounded-2xl shadow-2xl hover:border-amazonLight/30
     bg whithe z-10 hoverEffct p-5
    ">
      <div className="flex items-center justify-center h-full flex-1  ">
        <div className="flex items-center justify-center text-3xl font-semibold h-full w-full group underline ">
          <Link
            href={`/${category.name}`}
            className=" text-amazonBlue capitalize">
            {category.name}
          </Link>
        </div>
      </div>
      <div className="relative group overflow-hidden w-[85%] rounded-xl h-full">
        <Link href={`/${category.name}`}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill={true}
            className="object-contain group-hover:scale-110 overflow-hidden hoverEffect"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
