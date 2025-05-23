import React from "react";

import Image from "next/image";
import Cars from "@/components/FetchCars";

// import TestemonialSection from "@/components/testemonial";
import Link from "next/link";
const Cars1 = async () => {
  return (
    <div className="h-full w-full  overflow-hidden flex flex-col gap-5 mt-2 items-center justify-center">
      {/* main section  /> */}
      <div className="grid grid-cols-1  md:grid-cols-2  items-center justify-center   gap-2 w-full ">
        <div className="flex flex-col p-5   shadow-md h-[400px] justify-between bg-gray-100">
          <span className="text-[48px] mt-16 font-bold">Elomda Group</span>
          <span className="text-2xl font-bold ">
            Here you can find your dream car
          </span>
          <div className="w-full flex items-center justify-between gap-8 p-5">
            <Link
              href="/Cars/carsDetails"
              className="p-2 text-xl md:text-3xl bg-blue-950 rounded-full md:p-6 text-white">
              Buy a Car
            </Link>
            <Link
              href="/Cars/sellCar"
              className="p-2 text-xl md:text-3xl bg-blue-950 rounded-full md:p-6 text-white">
              Sell a Car
            </Link>
          </div>
        </div>
        <div className="flex flex-col   shadow-md relative h-[400px]">
          {" "}
          <Image
            src={"/pmw.png"}
            alt="car"
            fill={true}
            className=" object-contain md:object-cover"
          />
        </div>
      </div>
      {/* <div className=" flex items-center justify-between w-full   bg-gray-50  shadow-2xl border-2 p-5">
        <TestemonialSection />
      </div> */}
      <Cars />
    </div>
  );
};

export default Cars1;
