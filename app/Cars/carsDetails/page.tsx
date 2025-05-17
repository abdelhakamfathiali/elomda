import React from "react";
import TestemonialSection from "@/components/testemonial";
import Button from "@/components/CustomButton";
import Link from "next/link";
const CarsDetails = () => {
  return (
    <div className="">
      <div className=" w-full h-[100px] bg-gray-100 border rounded-sm grid  gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/Cars/carsDetails/newCars"
          className="text-2xl flex items-center justify-center text-white bg-blue-900 rounded-lg">
          New Cars
        </Link>
        <Link
          href="/Cars/carsDetails/usedCars"
          className="text-2xl flex items-center justify-center text-white bg-blue-900 rounded-lg">
          Used Cars
        </Link>
        <Link
          href="/Cars/carsDetails"
          className="text-2xl flex items-center justify-center text-white bg-blue-900 rounded-lg">
          All Cars
        </Link>
      </div>
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
      <TestemonialSection />
    </div>
  );
};

export default CarsDetails;
