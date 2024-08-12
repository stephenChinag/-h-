import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" alt="ihu" width={32} height={32} />
        <p className="text-[26px] font-extralight text-white max-sm:hidden">
          ihu
        </p>
      </Link>
    </nav>
  );
}
