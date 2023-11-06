import { Button } from "@/components/ui/button";
import React from "react";

function MessageBox() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
      <div className="space-y-6 lg:space-y-8">
        <h1
          className="text-4xl leading-[50px] lg:text-6xl lg:leading-[70px] font-medium text-background"
          style={{ fontFamily: "cursive" }}
        >
          Contact us. It&apos;s Easy
        </h1>
        <p className="leading-7 lg:text-lg lg:leading-8">
          You can also reach out to us through the contact form provided. Simply
          provide your details and message, and we&apos;ll get back to you as
          soon as possible.
        </p>

        <p className="leading-7 lg:text-lg lg:leading-8">
          We value your input and strive to provide the best possible experience
          for our customers. Whether you have inquiries about our services, need
          assistance with a booking, or have any other concerns, we&apos;re here
          to listen and provide prompt and helpful solutions.
        </p>
      </div>

      <div className="bg-yellow-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-8 space-y-4 md:space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex flex-col gap-3 w-full">
              <label className="capitalize text-lg">first name</label>
              <input
                required
                type="text"
                placeholder="first name"
                className="outline-none capitalize w-full p-3 border border-background rounded-sm bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <label className="capitalize text-lg">last name</label>
              <input
                required
                type="text"
                placeholder="last name"
                className="outline-none capitalize w-full p-3 border border-background rounded-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex flex-col gap-3 w-full">
              <label className="capitalize text-lg">email address</label>
              <input
                required
                type="email"
                placeholder="someone@example.com"
                className="outline-none capitalize w-full p-3 border border-background rounded-sm bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <label className="capitalize text-lg">phone number</label>
              <input
                required
                type="tel"
                placeholder="phone number"
                className="outline-none capitalize w-full p-3 border border-background rounded-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="capitalize text-lg">email address</label>

            <textarea
              required
              placeholder="Let's here from you"
              rows={5}
              className="outline-none w-full p-3 border border-background rounded-sm bg-transparent resize-none"
            ></textarea>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Button className="capitalize bg-yellow-500 text-white rounded-sm lg:text-lg lg:font-normal py-8 px-12 hover:bg-background">
              send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
