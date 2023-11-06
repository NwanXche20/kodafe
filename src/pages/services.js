import React from "react";
import { OurServices } from "@/views/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Services() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-20 lg:gap-32 pb-10">
        <section className="h-96 md:h-[90vh] relative bg-background text-white flex justify-center items-center servicesHero ">
          <div className="space-y-8 lg:space-y-10 text-center w-[90%] md:max-w-[75%] mx-auto">
            <h2 className="capitalize text-2xl md:text-3xl xl:text-4xl font-semibold">
              Services
            </h2>

            <h1 className="text-4xl leading-[50px] md:text-5xl xl:text-6xl font-bold max-w-2xl mx-auto">
              We offer a sea of exceptional services
            </h1>
          </div>
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <OurServices />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto space-y-10 mb-20">
          <div className="px-6 text-center text-xl md:text-3xl font-medium max-w-4xl mx-auto">
            Dive in with Kodafe Farms and let&apos;s make a splash in the world
            of aquaculture together!
          </div>

          <div className="px-6 text-center md:text-xl font-medium max-w-4xl mx-auto">
            Contact us today to explore our services.
            <div style={{ marginTop: "1rem" }}>
              <Link href="/contact">
                <Button className="bg-background text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12 hover:bg-yellow-600">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* <section className="w-[90%] lg:w-[85%] mx-auto">
      <OurStory />
    </section> */}
      </div>
    </div>
  );
}

export default Services;
