import TestElectronic from "@/components/testElectornic";
import React from "react";

const ElectronicPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 w-full ">
      <TestElectronic
        thumbnail={"/mobile.jpg"}
        price={1000}
        title="elomda electronic"
        description="this is for test"
      />
      <TestElectronic
        thumbnail={"/laptop.jpg"}
        price={1000}
        title="elomda electronic"
      />
      <TestElectronic
        thumbnail={"/tablet.jpg"}
        price={1200}
        title="elomda electronic"
      />
      <TestElectronic
        thumbnail={"/headphon.jpg"}
        price={500}
        title="elomda electronic"
      />
      <TestElectronic
        thumbnail={"/mobile2.jpg"}
        price={120000}
        title="elomda electronic"
      />
      <TestElectronic
        thumbnail={"/headphon.jpg"}
        price={120000}
        title="elomda electronic"
      />
      <TestElectronic
        thumbnail="/tablet.jpg"
        price={120000}
        title="elomda electronic"
      />
      <TestElectronic thumbnail={"/headphon.jpg"} price={120000} />
      <TestElectronic
        thumbnail={"/laptop2.jpg"}
        price={120000}
        title="elomda electronic"
      />
    </div>
  );
};

export default ElectronicPage;
