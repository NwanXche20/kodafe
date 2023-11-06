import React from "react";
import { GetInTouch, MessageBox } from "@/views/contact";

function Contact() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-20 lg:gap-32 pb-10">
        <section className="h-96 md:h-[90vh] relative bg-background text-white flex justify-center items-center contactHero ">
          <div className="space-y-8 lg:space-y-10 text-center w-[90%] md:max-w-[75%] mx-auto">
            <h2 className="capitalize text-2xl md:text-3xl xl:text-4xl font-semibold">
              Contact Us
            </h2>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              We&apos;re here to assist you
            </h1>
          </div>
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <GetInTouch />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <MessageBox />
        </section>

        <section className="w-[90%] lg:w-[85%] mx-auto">
          <div className="px-6 mb-20 text-center text-xl md:text-3xl font-medium max-w-4xl mx-auto">
            Don&apos;t hesitate to reach out to us. We look forward to hearing
            from you and being of service.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
