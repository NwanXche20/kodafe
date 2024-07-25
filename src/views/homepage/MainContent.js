import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function MainContent() {
  return (
    <div className="grid grid-cols-1 gap-20 w-[90%] lg:w-[85%] mx-auto max-w-[1600px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="min-h-[300px] max-h-[500px]">
          <img
            className="h-full max-h-full max-w-full w-full object-cover"
            src="https://res.cloudinary.com/dikleyjwz/image/upload/v1721906053/grid-image-1_xfpih1_1_ymagv8.jpg"
            alt="woman showing ripped fruit"
          />
        </div>
        <div className="space-y-6 lg:space-y-8 lg:self-center">
          <h1
            className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
            style={{ fontFamily: "cursive" }}
          >
            The story behind our company
          </h1>
          <p className="leading-7 lg:text-lg lg:leading-8">
            Kodafe Farms is not your ordinary farm story; we are a trailblazing
            agricultural firm that&apos;s making waves in the aquaculture
            industry. With a passion for sustainability and a commitment to
            redefining fish breeding practices, we&apos;re here to set new
            standards and create a sea of positive change!
          </p>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact">
              <Button className="bg-background text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="space-y-6 lg:space-y-8 lg:self-center">
          <h1
            className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
            style={{ fontFamily: "cursive" }}
          >
            Why choose us?
          </h1>
          <p className="leading-7 lg:text-lg lg:leading-8">
            At Kodafe Farms, we offer a sea of exceptional services tailored to
            meet your aquaculture needs.
          </p>

          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center text-white">
                ✓
              </div>
              Quality Fish Seeds
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center text-white">
                ✓
              </div>{" "}
              Innovation That Matters
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center text-white">
                ✓
              </div>
              Swimming Towards Sustainability
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center text-white">
                ✓
              </div>
              Customer Happiness is Our Priority
            </li>
          </ul>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/about">
              <Button className="bg-background text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12">
                About us
              </Button>
            </Link>
          </div>
        </div>

        <div className="min-h-[300px] max-h-[500px]">
          <img
            className="h-full w-full max-h-full max-w-full object-cover"
            src="https://res.cloudinary.com/dikleyjwz/image/upload/v1721906053/grid-image-2_kiufgw_1_d6gows.jpg"
            alt="woman showing ripped fruit"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
