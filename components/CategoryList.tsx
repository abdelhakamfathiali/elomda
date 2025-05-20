import React from "react";
import CategoryCard from "./CategoryCard";

type cat = {
  id: number;
  name: string;
  imageUrl: string;
};
interface Props {
  category: cat[];
  className?: string;
}

const CategoryList = ({ category }: Props) => {
  return (
    <div className="w-full flex flex-col gap-5 h-full p-5   ">
      {category.map((item) => (
        <CategoryCard key={item.id} category={item} />
      ))}
    </div>
  );
};

export default CategoryList;
