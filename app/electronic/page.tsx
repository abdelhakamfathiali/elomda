import TestCard from "@/components/CarCard";
import React from "react";
import { MdDiversity3 } from "react-icons/md";

const ElectronicPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
      <TestCard thumbnail="/pmw.png" price={120000} />
      <TestCard thumbnail="/pmw.png" price={120000} description="kimo alia" />
    </div>
  );
};

export default ElectronicPage;
