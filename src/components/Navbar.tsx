import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex-1 items-center">
        <span>MyBlog</span>
      </div>
      <div className="flex items-center gap-3">
        {/* <Image
          src="/mei.jpg"
          alt={""}
          width={40}
          height={40}
          className="object-cover rounded-full h-5 w-5"
        /> */}
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
