import CustomSearch from "@/components/CustomSearch";

import Image from "next/image";
import React from "react";

const CarsForm = () => {
  return (
    <div className="w-full   rounded  h-full top-0    ">
      <div className="w-full h-[800px]  bg-gray-100 rounded-3xl">
        <div className=" hidden  md:w-full md:inline-block md:h-[800px] ">
          <Image
            src={"/elomda/4.jpg"}
            alt="kimo"
            width={800}
            height={600}
            className="  rounded-3xl object-cover md:object-contain  w-full h-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 p-5    md:top-[400px]  top-0">
        <div className="grid grid-cols-1  md:grid-cols-3 justify-center gap-2">
          <div className="flex  gap-2 items-center w-full ">
            <label htmlFor="model" className="text-2xl font-bold">
              Mark
            </label>
            <CustomSearch title="Type mark" />
          </div>
          <div className="flex gap-4 items-center ">
            <label htmlFor="model" className="text-2xl font-bold">
              model
            </label>
            <CustomSearch title="Car Model" />
          </div>
          <div className="flex gap-16 items-center ">
            <label htmlFor="model" className="text-2xl font-bold">
              Year
            </label>
            <CustomSearch title="type year" />
          </div>
          <div className="flex gap-16 items-center  p-5 col-span-2  ">
            <label htmlFor="model" className="text-2xl font-bold">
              description{" "}
            </label>
            <textarea
              id="w3review"
              name="w3review"
              className="w-full h-[100px]"></textarea>
          </div>
          <div className="w-full p-2 h-full flex items-center justify-center">
            <button className="font-bold text-3xl text-green p-5 rounded-xl bg-white border">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsForm;
