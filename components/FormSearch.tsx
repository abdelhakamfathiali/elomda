"use client";
import LabelWithInput from "./ui/LabelWithInput";
import React from "react";
import { DataForm } from "@/constants/dataForm";
interface props {
  data: DataForm[];
}

const FormSearch = ({ data }: props) => {
  return (
    <div>
      <div className=" w-full h-full ">
        <div className=" flex  justify-center w-full h-full ">
          {data.map((e) => (
            <div
              key={e.id}
              className=" w-full flex flex-col gap-4 items-center ">
              <h1 className="text-5xl text-white pt-0">{e.title}</h1>
              <span
                className="
                 text-white  text-center text-2xl">
                {e.subTitle}
              </span>
              <div className="w-[90%] mx-auto">
                <form className="w-full  h-full p-10">
                  <div className="">
                    <div className=" w-full">
                      <LabelWithInput element={e.name} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormSearch;
