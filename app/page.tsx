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
      <div className="  sm:hidden md:flex flex-col h-full w-[320px] gap-10  p-5 ">
        <div className="relative flex p-5 w-full h-[400px] ">
          <Image
            src={"/omda.png"}
            alt="logo"
            fill={true}
            className="rounded-full object-contain"
          />
        </div>
        <div className="h-[50%] flex flex-col items-center gap-10 p-5 ">
          <span className="w-full text-3xl   p-2 text-center">
            Takhtit <br />
          </span>
          <br />
          <span className="w-full text-3xl   p-2 text-center">
            Elomda <br />
          </span>
          <span className="w-full text-3xl   p-2 text-center">group</span>
        </div>
      </div>
    </div>
  );
}
