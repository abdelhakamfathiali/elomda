import React from "react";
import { data } from "@/constants/categoryList";
import CategoryCard from "./CategoryCard";

const CategoryItems = () => {
  return (
    <div>
      {data?.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryItems;
