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
      className="flex flex-col h-[600px] rounded-2xl shadow-2xl hover:border-amazonLight/30
     bg whithe  hoverEffct   p-5 md:flex md:flex-row
    ">
      <div className="flex items-center justify-center h-[10%] mt-2  md:h-full md:w-[200px]">
        <div className="flex items-center justify-center text-3xl font-semibold h-full w-full group underline ">
          <Link
            href={`/${category.name}`}
            className=" text-amazonBlue capitalize">
            {category.name}
          </Link>
        </div>
      </div>
      <div className=" relative group overflow-hidden w-full h-[85%] rounded-xl ">
        <Link href={`/${category.name}`}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill={true}
            className="object-contain md:object-cover group-hover:scale-110 overflow-hidden hoverEffect"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
