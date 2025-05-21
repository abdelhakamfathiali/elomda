"use client";

import { AiOutlineSearch } from "react-icons/ai";
type Title = {
  placeholder: string;
};
const SearchInput = ({ placeholder }: Title) => {
  return (
    <>
      <form className="w-[400px] relative">
        <div className="relative  p-5">
          <input
            type="search"
            placeholder={placeholder}
            className=" p-4 rounded-full bg-slate-100 w-full"
          />
          <button className="absolute right-6 bottom-1/2 translate-y-1/2 p-4 bg-slate-500 rounded-full">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
