import { data } from "@/constants/categoryList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CategoryList from "@/components/CategoryList";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex  items-center justify-center w-full h-full  p-2">
      <div className="w-[100%]  h-full overflow-hidden">
        <CategoryList category={data} />
      </div>
      <div className="sm:hidden md:flex flex-col  justify-start h-[1400px] md:w-[300px] p-5 gap-10">
        <div className="relative  flex  p-5 h-[15%] w-full ">
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
