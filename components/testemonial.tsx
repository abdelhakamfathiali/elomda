import React from "react";
import TestCard from "./CarCard";
const TestemonialSection = () => {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 items-center gap-3 my-3">
      <TestCard price={1200000} thumbnail="/pmw.png" description="awesom car" />
      <TestCard
        price={1200000}
        thumbnail="/car1.jpg"
        description="awesom car"
      />
      <TestCard
        price={1200000}
        thumbnail="/car3.jpg"
        description="awesom car"
      />
    </div>
  );
};

export default TestemonialSection;
