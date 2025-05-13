import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import TestemonialSection from "@/components/testemonial";
import Link from "next/link";
const Cars = () => {
  return (
    <div className="h-full w-full  overflow-hidden flex flex-col gap-5 mt-2">
      {/* main section  /> */}
      <div className="grid grid-cols-1  md:grid-cols-2  items-center justify-center   gap-2 ">
        <div className="flex flex-col p-5   shadow-md h-[400px] justify-between">
          <span className="text-[48px] mt-16 ">Elomda && Trading</span>
          <span className="text-xl ">Here you can find your dream car</span>
          <div className="w-full flex items-center justify-between gap-10 p-5">
            <Button variant="outline" size="lg" className="w-[45%] text-2xl">
              <Link href={"/carsDetails"}>Buy Car</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-[45%] text-2xl">
              <Link href={"/carsForm"}>Sell Car</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col   shadow-md relative h-[400px]">
          {" "}
          <Image
            src={"/pmw.png"}
            alt="car"
            fill={true}
            className=" object-cover"
          />
        </div>
      </div>
      <div className=" flex items-center justify-between w-full  h-[200px] bg-gray-50  shadow-2xl border-2 p-5">
        <TestemonialSection />
      </div>
    </div>
  );
};

export default Cars;
