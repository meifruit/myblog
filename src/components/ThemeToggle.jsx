"use client";

import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="w-10 h-5 rounded-full cursor-pointer  items-center justify-center relative hidden sm:flex"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : {
              backgroundColor: "#0f172a",
            }
      }
    >
      {/* <Image src="/moon.png" alt="" width={14} height={14} /> */}
      <div
        className="w-4 h-4 rounded-full absolute left-0.5"
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : {
                right: 1,
                backgroundColor: "white",
              }
        }
      >
        {/* <Image src="/sun.png" alt="" width={14} height={14} /> */}
      </div>
    </div>
  );
};

export default ThemeToggle;
