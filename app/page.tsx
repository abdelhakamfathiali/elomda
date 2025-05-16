import { data } from "@/constants/categoryList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CategoryList from "@/components/CategoryList";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex ">
      <div className="flex flex-col h-full items-center justify-center w-full  p-2 ">
        <div className="w-[100%]   ">
          <CategoryList category={data} />
        </div>
      </div>
      <div className=" sm:hidden md:flex flex-col h-[1000px] w-[300px]  gap-10  p-5 ">
        <div className="relative  flex  p-5 h-[23%] w-full ">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            fill={true}
            className="rounded-full"
          />
        </div>
        <div className="h-[50%] flex flex-col items-center gap-10 p-5 ">
          <span className="w-full text-3xl   p-2 text-center">
            Takhtit <br />
          </span>
          && <br />
          Elomda <br />
          group
        </div>
      </div>
    </div>
  );
}
