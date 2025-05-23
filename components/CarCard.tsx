import { Car } from "@/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TestCard = ({ thumbnail, price, description }: Car) => {
  return (
    <div className="border border-gray-200 w-full h-full rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full min-h-[350px]">
        <Link href="#">
          <Image
            className="rounded-t-lg object-contain md:object-cover "
            src={`${thumbnail}`}
            alt="kimo"
            fill={true}
          />
        </Link>
      </div>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {description}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default TestCard;
