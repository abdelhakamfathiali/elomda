"use client";

import Link from "next/link";

const HeaderBottom = () => {
  return (
    <div className="flex flex-1 sticky bg-blue-600 text-white/80 h-[60px] items-center p-5 ">
      <div className="flex items-center space-x-3 py-1 pl-6 text-lg">
        <Link href={"/Cars"}>Cars</Link>
        <Link href={"/Real-Estate"}>Real State</Link>

        <Link href={"/electronic"} className="link hidden lg:inline-flex">
          Electorinc
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottom;
