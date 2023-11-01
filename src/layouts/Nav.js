import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume, FaBars, FaXmark } from "react-icons/fa6";

function CustomLink({ to, children, ...props }) {
  return (
    <li className="py-4 h-auto relative">
      <Link
        href={to}
        {...props}
        className="no-underline flex items-center gap-1 capitalize text-inherit font-medium lg:font-normal transition-all ease-in-out duration-700 hover:text-yellow-600 hover:font-medium active:font-medium active:text-yellow-600 focus:text-yellow-600 focus:font-medium"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [clicked, setClicked] = useState(false);

  const handleShowNav = () => {
    setClicked(true);
  };

  const handleCloseNav = () => {
    setClicked(false);
  };
  return (
    <>
      <nav className="z-50 sticky top-0 bg-background p-4 flex justify-between items-center gap-4 md:hidden">
        <div
          className={`z-50 text-5xl font-semibold ${
            clicked ? "text-background" : "text-white"
          }`}
        >
          <Link href="/">
            Kodafe<sup className="text-base">farms</sup>
          </Link>
        </div>

        <div>
          <ul
            id="mobileNav"
            className={clicked ? "#mobileNav activeMenu" : "#mobileNav"}
          >
            <CustomLink onClick={handleCloseNav} to="/">
              Home
            </CustomLink>
            <CustomLink onClick={handleCloseNav} to="/about">
              about
            </CustomLink>
            <CustomLink onClick={handleCloseNav} to="/services">
              services
            </CustomLink>
            <CustomLink onClick={handleCloseNav} to="/contact">
              contact
            </CustomLink>
          </ul>
        </div>

        <div className="z-50">
          {!clicked ? (
            <button
              onClick={handleShowNav}
              className="rounded-full p-3 flex justify-center items-center bg-yellow-700 text-white transition-all ease-in-out duration-200 text-xl"
            >
              <FaBars />
            </button>
          ) : (
            <button
              onClick={handleCloseNav}
              className="rounded-full p-3 flex justify-center items-center bg-background text-white transition-all ease-in-out duration-200 text-xl"
            >
              <FaXmark />
            </button>
          )}
        </div>
      </nav>

      <nav className="hidden md:block bg-background text-white sticky top-[-1px] z-50 shadow-md">
        <div className="w-[85%] mx-auto py-2 lg:py-4 flex justify-between items-center gap-4">
          <div className="text-5xl lg:text-6xl font-semibold">
            <Link href="/">
              Kodafe<sup className="text-base lg:text-lg">farms</sup>
            </Link>
          </div>

          <ul className="flex items-center gap-6 lg:gap-10 xl:gap-14 text-base lg:text-lg font-normal capitalize">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">about</CustomLink>
            <CustomLink to="/services">services</CustomLink>
            <CustomLink to="/contact">contact</CustomLink>
          </ul>

          <Link href="Tel:+234 803 674 0000" className="">
            <div className="bg-white px-6 py-3 text-background flex flex-col lg:flex-row justify-center items-center gap-3 font-semibold text-base lg:text-lg rounded-[50px]">
              <div className="rounded-full p-2 xl:p-4 flex justify-center items-center bg-background text-white transition-all ease-in-out duration-500 hover:bg-yellow-700">
                <FaPhoneVolume />
              </div>
              <p className="hidden xl:block">+234 803 674 0000</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
