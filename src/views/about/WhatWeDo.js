import { Button } from "@/components/ui/button";
import React from "react";

function ListMarker({ children, ...props }) {
  return (
    <li className="flex items-center gap-3 lg:gap-5" {...props}>
      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-background rounded-full flex justify-center items-center text-white">
        ✓
      </div>
      <p className="break-words flex-1 leading-7 lg:text-lg lg:leading-8">
        {children}
      </p>
    </li>
  );
}

function WhatWeDo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
      <div className="space-y-6 lg:space-y-8 lg:self-center">
        <h1
          className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
          style={{ fontFamily: "cursive" }}
        >
          What we are about
        </h1>
        <p className="leading-7 lg:text-lg lg:leading-8">
          Kodafe Farms and Allied Services Ltd, is an agricultural firm that is
          redefining & repositioning aquaculture practice in Nigeria, through:
        </p>

        <ul className="list-none space-y-2">
          <ListMarker>
            Production of quality fish seeds - fingerlings of GIFT Tilapia,
            Pangasius, Hybrid catfish, clarias catfish, etc
          </ListMarker>
          <ListMarker>
            Operation of topnotch modern hatcheries, Re-circulatory Aquaculture
            System (RAS)
          </ListMarker>
          <ListMarker>
            {" "}
            Promotion of Sustainable Development Goals (SDG) - Goals 1, 2, 5, 9,
            13, 14 & 17
          </ListMarker>
          <ListMarker>
            Operation of cold chain management - cold room & cooking system for
            transportation and distribution of processed fish
          </ListMarker>
          <ListMarker>
            Training, consultancy & internship in aquaculture
          </ListMarker>
        </ul>

        <div style={{ marginTop: "3rem" }}>
          <Button className="bg-background text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12">
            About us
          </Button>
        </div>
      </div>

      <div className="min-h-[300px] max-h-[500px]">
        <img
          className="h-full w-full max-h-full max-w-full object-cover"
          src="https://res.cloudinary.com/dikleyjwz/image/upload/v1698763543/grid-image-2_kiufgw.jpg"
          alt="woman showing ripped fruit"
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
