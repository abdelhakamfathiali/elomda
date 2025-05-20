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
      className="flex flex-col md:flex md:flex-row items-center h-[600px] rounded-2xl shadow-2xl hover:border-amazonLight/30
     
    ">
      <div className="flex items-center justify-center text-2xl font-semibold  group  w-[20%] ">
        <Link
          href={`/${category.name}`}
          className=" text-blue-800 font-bold capitalize bg-yellow-500 border-2 rounded-md p-4">
          {category.name}
        </Link>
      </div>
      <div className=" w-full relative group h-full overflow-hidden  md:h-[85%] rounded-xl ">
        <Link href={`/${category.name}`}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill={true}
            className="object-contain md:object-cover "
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
