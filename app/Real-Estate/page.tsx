import React from "react";
import FormSearch from "@/components/FormSearch";
import { PiBuildingApartmentLight } from "react-icons/pi";
import Image from "next/image";

const RealEstatePage = () => {
  const data = [
    {
      title: "Your next property is here.",
      subTitle: "Let's find a home that's perfect for you",
      id: 0,
      name: [
        {
          id: 0,
          name: "Purpose",
          element: [
            { id: 0, title: "SELL" },
            { id: 1, title: "BUY" },
            { id: 2, title: "RENT" },
          ],
        },
        {
          id: 1,
          name: "Location",
          element: [
            { id: 0, title: "caior" },
            { id: 1, title: "Assuit" },
          ],
        },
        {
          id: 2,
          name: "Property type",
          element: [
            { id: 0, title: "apartment" },
            { id: 1, title: "commercial" },
            { id: 2, title: "villa" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col gap-2 w-full h-full  bg-gray-600 rounded-3xl ">
        <div className="w-full h-[600px]  sm:h-[700px] relative rounded-xl mb-5">
          <Image
            src={"/house5.jpeg"}
            alt="kimo"
            fill={true}
            priority
            className=" mix-blend-overlay rounded-3xl "
          />

          <div className="absolute top-24  w-full h-[450px] sm:h-full p-5 items-center justify-center">
            <FormSearch data={data} />
          </div>
        </div>
      </div>
      <div className="w-full h-full p-2  shadow-xl mt-2 grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:w-full gap-4 ">
        <div className="max-w-full rounded-xl h-[150px] flex gap-5 justify-around p-4 bg-blue-800 text-white font-semibold items-center">
          <p className="text-2xl uppercase">buy</p>
          <PiBuildingApartmentLight className="size-16" />
        </div>
        <div className="max-w-full rounded-xl h-[150px] flex p-4 bg-blue-500 text-white font-semibold items-center">
          <p className="text-2xl uppercase">sell</p>
        </div>
        <div className="max-w-full rounded-xl h-[150px] flex p-4 bg-blue-800 text-white font-semibold items-center">
          <p className="text-2xl uppercase">rent</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
