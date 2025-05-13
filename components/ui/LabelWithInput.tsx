import React from "react";
import { Element, kimo } from "@/constants/dataForm";
type Data = {
  id: number;
  name: string;
  element: kimo[];
};
interface Props {
  element?: Data[];
}

const LabelWithInput = ({ element }: Props) => {
  return (
    <div
      className="w-full grid grid-cols-4 gap-4 items-end 
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     min-w-[500px] sm:ml-0">
      {element?.map((el) => (
        <div key={el.id} className="flex flex-col gap-2">
          <label className="text-white font-semibold"> {el.name}</label>
          <select className="p-5 rounded-lg text-xl">
            {el.element?.map((r) => (
              <option key={r.id}>{r.title}</option>
            ))}
          </select>
        </div>
      ))}
      <button className="rounded-xl text-center sm:h-16 bg-red-500 h-[70%] mb-0 ">
        Find
      </button>
    </div>
  );
};

export default LabelWithInput;
