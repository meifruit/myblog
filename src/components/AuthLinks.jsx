"use client";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden sm:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:flex">
            Write
          </Link>
          <span className="hidden sm:flex">Logout</span>
        </>
      )}
      <div
        className="w-5 h-4 flex flex-col justify-between cursor-pointer sm:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-0.5 bg-black"></div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="w-full h-0.5 bg-black"></div>
      </div>
      {open && (
        <div
          className="absolute left-0 w-full flex flex-col items-center justify-center gap-12"
          style={{
            height: "calc(100vh - 60px)",
            top: "60px",
            backgroundColor: "var(--Bg)",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Video</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Contacts</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className="">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className="">
                Write
              </Link>
              <span className="">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
