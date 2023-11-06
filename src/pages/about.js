import React from "react";
import { OurStory, OurValues, WhatWeDo, CorporateRes } from "@/views/about";

function About() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-20 lg:gap-32 pb-10">
        <section className="h-96 md:h-[90vh] relative bg-background text-white flex justify-center items-center aboutHero ">
          <div className="space-y-8 lg:space-y-10 text-center w-[90%] md:max-w-[75%] mx-auto">
            <h2 className="capitalize text-2xl md:text-3xl xl:text-4xl font-semibold">
              About Kodafe Farms
            </h2>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Where Fishery Meets Innovation!
            </h1>
          </div>
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <WhatWeDo />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <OurStory />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <OurValues />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <CorporateRes />
        </section>
      </div>
    </div>
  );
}

export default About;
