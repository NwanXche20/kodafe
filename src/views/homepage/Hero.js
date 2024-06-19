import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-4 py-10 md:py-10 md:px-0 lg:pt-10 lg:pb-20 w-full md:w-[85%] max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-6">
      <div className="w-full md:w-[120%] space-y-3 xl:space-y-6 break-words">
        <h1 className="text-4xl leading-[50px] md:leading-[60px] md:text-4xl lg:text-5xl xl:text-7xl text-white font-semibold lg:leading-[80px] whitespace-break-spaces">
          Welcome to{" "}
          <span className="text-yellow-600">
            Kodafe<sup className="text-lg">farms</sup>
          </span>{" "}
          and Allied Services Ltd.
        </h1>

        <h5 className="text-white text-lg md:text-xl xl:text-[22px] leading-10">
          Your gateway to a revolutionary aquaculture experience in Nigeria! 🚀
        </h5>

        <div
          style={{ marginTop: "3rem" }}
          className="flex items-center gap-10 w-fit text-white"
        >
          <Link href="/contact">
            <button className="bg-transparent font-medium border-2 border-yellow-600 rounded-md px-6 py-4 transition-all ease-in-out duration-500 hover:bg-yellow-600 hover:text-inherit">
              Contact us
            </button>
          </Link>

          <Link href="mailto:kodafe@mail.com">
            <button className="bg-transparent border border-[#f2f2f2] font-medium rounded-md px-6 py-4 transition-all ease-in-out duration-500 hover:bg-[#f2f2f2] hover:text-background">
              Email us
            </button>
          </Link>
        </div>
      </div>

      <div className="h-96 w-full md:w-[80%] mx-auto md:mx-0 md:h-[500px]">
        <img
          className="opacity-90 max-h-full h-full w-full max-w-full object-cover shadow-md"
          src="/images/hero-image3.jpg"
          alt="woman showing ripped fruit"
        />
      </div>
    </div>
  );
}

export default Hero;
