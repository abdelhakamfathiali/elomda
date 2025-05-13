import React from "react";
import { data } from "@/constants/categoryList";
import CategoryCard from "@/components/CategoryCard";

const AccessoriesPage = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 w-full p-5 gap-2 bg-yellow-500 h-full  hoverEffct 
  ">
      {data?.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};

export default AccessoriesPage;
