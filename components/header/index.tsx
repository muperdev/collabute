import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-center items-center gap-x-6">
      <a href="#early-bird" className="text-white">
        Early bird
      </a>
      <Link href={"/"}>
        <Image alt="" src={"/logo.svg"} width={50} height={50} />
      </Link>
      <a href="#features" className="text-white">
        Features
      </a>
    </div>
  );
};

export default Header;
