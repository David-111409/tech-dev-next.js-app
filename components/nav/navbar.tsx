"use client";
import { GrTechnology } from "react-icons/gr";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import MobMenu from "./MobMenu";
import { useEffect, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) setShadow(true);
      else setShadow(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`h-[12vh] bg-white w-full ${shadow && "shadow-md"} transition-all duration-200 fixed z-100`}
    >
      <div className="h-full w-[90%] xl:w-[80%] flex justify-between items-center mx-auto">
        <div className="flex items-center justify-center gap-x-2">
          <div className="size-10 bg-blue-800 flex items-center justify-center rounded-full">
            <GrTechnology className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold hidden sm:block md:text-2xl text-blue-800">TechDev</h1>
        </div>

        <nav className="hidden xl:flex items-centr justify-center gap-x-10">
          {navLinks.map(({ href, name }) => (
            <Link
              key={name}
              href={href}
              className="text-black hover:text-rose-500 font-semibold transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Create Account
            </span>
          </a>
          <HiBars3BottomRight
            onClick={handleOpen}
            className="size-8  text-black block xl:hidden cursor-pointer ml-4"
          />
          <MobMenu handleClose={handleClose} open={open} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
