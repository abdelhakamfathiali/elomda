"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavbar = (): void => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50 mb-2">
      <div className="max-w-7xl mx-auto px-8  sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between  p-6">
          <div className="flex items-center ">
            <div className="flex-shrink-0 relative">
              <Link href={"/"} className="h-full  ">
                <Image
                  src={"/omda.png"}
                  alt="logo"
                  width={70}
                  height={70}
                  className="object-cover rounded-full p-0"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-8">
              <Link
                href={"/Cars"}
                className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
                Cars
              </Link>

              <Link
                href={"/Real-Estate"}
                className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
                Real Estate
              </Link>

              <Link
                href={"/electronic"}
                className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
                Electronics
              </Link>

              <Link
                href={"/signIn"}
                className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
                SignIn
              </Link>

              <Link
                href={"/register"}
                className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
                Register
              </Link>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-white hover:bg-white hover:text-black rounded-lg p-4 text-3xl">
            English
          </Link>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
              {isClicked ? (
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-3 space-y-1 sm:py-4">
            <div className="ml-4 flex flex-col items-start space-x-8">
              <button onClick={toggleNavbar} className=" h-full">
                <Link
                  href={"/Cars"}
                  className="text-white block hover:bg-white hover:text-black rounded-lg ml-10 p-4 text-3xl w-full">
                  Cars
                </Link>
              </button>

              <Link
                href={"/Real-Estate"}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-4 text-3xl w-full">
                Real Estate
              </Link>

              <Link
                href={"/electronic"}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-4 text-3xl w-full">
                Electronics
              </Link>

              <Link
                href={"/signIn"}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-4 text-3xl w-full">
                SignIn
              </Link>

              <Link
                href={"/register"}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-4 text-3xl w-full">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
