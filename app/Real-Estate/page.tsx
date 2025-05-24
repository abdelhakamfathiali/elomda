import React from "react";
import Image from "next/image";
import { MdCall, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const RealEstatePage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-2 w-full  items-center justify-center  rounded-3xl  ">
        <div className="w-[98%] h-[500px] flex items-center justify-center  sm:h-[700px] relative rounded-xl mb-5 p-1">
          <Image
            src={"/house2.jpg"}
            alt="kimo"
            fill={true}
            priority
            className="  rounded-3xl "
          />

          <div className="absolute top-3/4  w-full h-[450px] sm:h-full p-5 items-center justify-center">
            {/* <FormSearch data={data} /> */}
            <div className="absolute w-full flex items-center justify-start gap-8 p-5">
              <Link
                href="/Real-Estate/apartmentDetails"
                className="px-8 text-xl md:text-3xl bg-transparent rounded-lg md:py-2 text-white hover:bg-orange-500">
                Buy
              </Link>
              <Link
                href="/Real-Estate/apartmentSell"
                className="px-8 text-xl md:text-3xl bg-transparent rounded-lg md:py-2 text-white hover:bg-orange-500">
                Sell
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 mt-5 items-center justify-center ">
        <div
          className="flex h-[600px]  flex-col w-[95%] md:h-[500px] gap-4 rounded-md  border-blue-500 md:flex 
        md:flex-row p-5  border overflow-hidden  ">
          <Image
            src={"/apartmen2.webp"}
            width={400}
            height={340}
            alt="home"
            className="object-cover w-full h-[50%] md:h-full  "
          />
          <div className="w-full flex flex-col gap-4  bg-gray-50 p-4 items-center justify-around">
            <span className="text-2xl"> {`EGP : `}150000 </span>
            <div className="grid grid-cols-3 gap-6 w-full  ">
              <p>Aparment</p>
              <p>More Details</p>
              <p>
                {" "}
                <span className="font-bold">Area</span>:140 Sq.M.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-2 items-start">
              <span> Location and More Details</span>
              <Link
                href={"/Real-Estate/apartment-details"}
                className="text-xl text-blue-800">
                {" "}
                give her the address and link to details if found
              </Link>
              <div className=" w-full flex gap-10 justify-between items-center mt-5">
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdEmail />
                  Email
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdCall />
                  call
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <FaWhatsapp />
                  WhatsUp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-[600px]  flex-col w-[95%]  md:h-[500px] gap-4 rounded-md  border-blue-500 md:flex 
        md:flex-row p-5  border overflow-hidden  ">
          <Image
            src={"/apartment3.jpg"}
            width={400}
            height={340}
            alt="home"
            className="object-cover w-full h-[50%] md:h-full  "
          />
          <div className="w-full flex flex-col gap-10  bg-gray-50 p-4 items-center justify-around">
            <span className="text-2xl"> {`EGP : `}150000 </span>
            <div className="grid grid-cols-3 gap-6 w-full  ">
              <p>Aparment</p>
              <p>More Details</p>
              <p>
                {" "}
                <span className="font-bold">Area</span>:140 Sq.M.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-4 items-start">
              <span> Location and More Details</span>
              <Link
                href={"/Real-Estate/apartment-details"}
                className="text-xl text-blue-800">
                {" "}
                give her the address and link to details if found
              </Link>
              <div className=" w-full flex gap-10 justify-between items-center mt-5">
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdEmail />
                  Email
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdCall />
                  call
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <FaWhatsapp />
                  WhatsUp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-[600px]  flex-col w-[95%]  md:h-[500px] gap-4 rounded-md  border-blue-500 md:flex 
        md:flex-row p-5  border overflow-hidden  ">
          <Image
            src={"/apartmen2.webp"}
            width={400}
            height={340}
            alt="home"
            className="object-cover w-full h-[50%] md:h-full  "
          />
          <div className="w-full flex flex-col gap-10  bg-gray-50 p-4 items-center justify-around">
            <span className="text-2xl"> {`EGP : `}150000 </span>
            <div className="grid grid-cols-3 gap-6 w-full  ">
              <p>Aparment</p>
              <p>More Details</p>
              <p>
                {" "}
                <span className="font-bold">Area</span>:140 Sq.M.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-4 items-start">
              <span> Location and More Details</span>
              <Link
                href={"/Real-Estate/apartment-details"}
                className="text-xl text-blue-800">
                {" "}
                give her the address and link to details if found
              </Link>
              <div className=" w-full flex gap-10 justify-between items-center mt-5">
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdEmail />
                  Email
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdCall />
                  call
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <FaWhatsapp />
                  WhatsUp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-[600px]  flex-col w-[95%]  md:h-[500px] gap-4 rounded-md  border-blue-500 md:flex 
        md:flex-row p-5  border overflow-hidden  ">
          <Image
            src={"/apartment3.jpg"}
            width={400}
            height={340}
            alt="home"
            className="object-cover w-full h-[50%] md:h-full  "
          />
          <div className="w-full flex flex-col gap-10  bg-gray-50 p-4 items-center justify-around">
            <span className="text-2xl"> {`EGP : `}150000 </span>
            <div className="grid grid-cols-3 gap-6 w-full  ">
              <p>Aparment</p>
              <p>More Details</p>
              <p>
                {" "}
                <span className="font-bold">Area</span>:140 Sq.M.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-4 items-start">
              <span> Location and More Details</span>
              <Link
                href={"/Real-Estate/apartment-details"}
                className="text-xl text-blue-800">
                {" "}
                give her the address and link to details if found
              </Link>
              <div className=" w-full flex gap-10 justify-between items-center mt-5">
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdEmail />
                  Email
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <MdCall />
                  call
                </Link>
                <Link
                  href="/"
                  className="font-bold text-xl flex gap-2 items-center">
                  <FaWhatsapp />
                  WhatsUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
