import { data } from "@/constants/categoryList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CategoryList from "@/components/CategoryList";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex  h-full">
      <div className="flex flex-col h-full items-center justify-center w-full   ">
        <div className="w-full   ">
          <CategoryList category={data} />
        </div>
      </div>
      <div className="  hidden md:hidden  md:flex-col lg:flex lg:flex-col h-full w-[500px] gap-10  p-5 ">
        <div className="relative flex  w-full h-[400px]">
          <Image
            src={"/omda.png"}
            alt="logo"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
        <div className="h-[50%] flex flex-col items-center gap-10 p-5 ">
          <span className="w-full text-4xl font-bold text-red-800  p-2 text-center">
            www.takhtit.online <br />
          </span>
          <br />
          <span className="w-full text-3xl   p-2 text-center">
            <h1 className="text-red-800 text-4xl font-bold">Elomda Group </h1>
            <br />
            <span className="text-red-800 text-2xl font-bold">
              for real estate
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
