import { Button } from "@/components/ui/button";
import React from "react";

function ListMarker({ children, ...props }) {
  return (
    <li className="flex items-center gap-2" {...props}>
      <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center text-white">
        ✓
      </div>
      {children}
    </li>
  );
}

function OurStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 gap-y-8">
      <div className="space-y-6 lg:space-y-8">
        <h1
          className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
          style={{ fontFamily: "cursive" }}
        >
          Our Story
        </h1>
        <p className="leading-7 lg:text-lg lg:leading-8">
          Kodafe Farms is not your ordinary farm story; we are a trailblazing
          agricultural firm that&apos;s making waves in the aquaculture
          industry. With a passion for sustainability and a commitment to
          redefining fish breeding practices, we&apos;re here to set new
          standards and create a sea of positive change!
        </p>

        {/* <div style={{ marginTop: "3rem" }}>
          <Button className="bg-background text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12">
            About us
          </Button>
        </div> */}
      </div>

      <div className="space-y-6 lg:space-y-8">
        <h1
          className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
          style={{ fontFamily: "cursive" }}
        >
          Innovating Aquaculture
        </h1>
        <p className="leading-7 lg:text-lg lg:leading-8">
          At Kodafe Farms, we&apos;re on a mission to redefine aquaculture
          practices for good! 🏆 Our modern hatcheries, fueled by cutting-edge
          Re-circulatory Aquaculture System (RAS) technology, showcase our
          unwavering commitment to innovation and environmental responsibility.
          Our fish live their best lives, and our planet thrives as we conserve
          water and energy. 🌱💧 Join us in our quest for a more sustainable and
          eco-friendly tomorrow! 🌊🌿
        </p>
      </div>

      <p className="lg:col-span-2 leading-7 lg:text-lg lg:leading-8">
        At Kodafe Farms, we believe in sharing our expertise and know-how. Our
        training, consultancy, and internship programs are designed to empower
        and educate individuals interested in the wonders of Fishery.
      </p>
    </div>
  );
}

export default OurStory;
