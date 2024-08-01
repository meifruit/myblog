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
        <div
          className="w-full h-0.5 bg-black"
          style={{ backgroundColor: "var(--bg)" }}
        ></div>
        <div
          className="w-full h-0.5 bg-black"
          style={{ backgroundColor: "var(--bg)" }}
        ></div>
        <div
          className="w-full h-0.5 bg-black"
          style={{ backgroundColor: "var(--bg)" }}
        ></div>
      </div>
      {open && (
        <div
          className="waffle-menu absolute left-0 w-full flex flex-col items-center justify-center gap-12"
          style={{
            height: "calc(100vh - 60px)",
            top: "60px",
            backgroundColor: "var(--bg)",
            textColor: "var(--textColor)",
          }}
        >
          <Link href="/" className="menu-link">
            Home
          </Link>
          <Link href="/" className="menu-link">
            Blog
          </Link>
          <Link href="/" className="menu-link">
            Video
          </Link>
          <Link href="/" className="menu-link">
            Coding
          </Link>
          <Link href="/" className="menu-link">
            Contacts
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className="menu-link">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className="menu-link">
                Write
              </Link>
              <span className="menu-link">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
