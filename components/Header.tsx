import Image from "next/image";
import Link from "next/link";
import SignInButton from "./SignInButton";
import HeaderBottom from "./HeaderBottom";
import SearchInput from "./SearchInput";
const Header = async () => {
  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className=" h-20 bg-blue-800 text-lightText sticky top-0 z-50 flex justify-center">
        <div className="h-full w-[60%] px-10 flex-2 inline-flex items-center justify-start gap-10">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              className=" object-cover  rounded-full"
              src={"/101.png"}
              alt="logo"
              width={80}
              height={80}
              priority
            />
          </Link>

          <div className=" ">
            <SearchInput />
          </div>
        </div>
        <div className="flex flex-1 m-2 p-2 items-center justify-start  ">
          <Link href={"/signIn"}>
            <SignInButton />
          </Link>
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export default Header;
