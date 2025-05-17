import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const CarsForm = () => {
  return (
    <div className="w-full   rounded  h-full top-0    ">
      <div className="w-full h-[800px] relative bg-gray-100 rounded-3xl">
        <div className=" hidden md:relative md:w-full md:inline-block md:h-[800px] ">
          <Image
            src={"/elomda/4.jpg"}
            alt="kimo"
            width={800}
            height={600}
            className="  rounded-3xl object-cover md:object-contain  w-full h-full"
          />
        </div>

        <form className="w-full flex flex-col gap-10 p-5    md:top-[400px] md:absolute top-0">
          <div className="grid grid-cols-1  md:grid-cols-3 justify-center gap-2">
            <div className="flex  gap-16 items-center w-full ">
              <label htmlFor="model" className="text-2xl font-bold">
                Model
              </label>
              <input
                name="model"
                required
                className="w-[400px] rounded-xl  text-2xl md:w-[300px] "
                placeholder="Enter model car"
              />
            </div>
            <div className="flex gap-4 items-center ">
              <label htmlFor="model" className="text-2xl font-bold">
                Car marke
              </label>
              <input
                name="model"
                required
                className="w-[400px] rounded-xl text-2xl md:w-[300px] "
                placeholder="Enter model car"
              />
            </div>
            <div className="flex gap-16 items-center ">
              <label htmlFor="model" className="text-2xl font-bold">
                Model
              </label>
              <input
                name="model"
                required
                className="w-[400px] rounded-xl border-none text-2xl md:w-[300px] border-b-2 "
                placeholder="Enter model car"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarsForm;
