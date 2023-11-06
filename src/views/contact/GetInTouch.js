import React from "react";

import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const infoObj = [
  {
    icon: <FaPhone />,
    heading: "Call Today.",
    content: "+234 803 674 0000",
  },
  {
    icon: <FaEnvelope />,
    heading: "Have Any Question?",
    content: "kodafe@mail.com",
  },
  {
    icon: <FaLocationDot />,
    heading: "Visit Anytime",
    content: "2th Street, Office 8, Somewhere in, Nigeria",
  },
];

function Info({ options }) {
  return (
    <div className="py-6 lg:py-8 flex items-center md:text-left md:items-start gap-6 md:gap-8 lg:gap-10">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-100 text-background flex justify-center items-center text-2xl md:text-4xl">
        {options.icon}
      </div>

      <div className="space-y-4 flex-1">
        <h3 className="font-semibold text-xl lg:text-2xl capitalize">
          {options.heading}
        </h3>

        <p className="leading-7 lg:leading-8 text-lg">{options.content}</p>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
      <div className="min-h-[300px] max-h-[700px]">
        <img
          className="h-full w-full max-h-full max-w-full object-cover"
          src="https://res.cloudinary.com/dikleyjwz/image/upload/v1699202567/pexels-yan-krukau-8866809_p37epp.jpg"
          alt="customer support"
        />
      </div>

      <div className="space-y-6 lg:space-y-8 lg:self-center lg:px-16">
        <h1
          className="text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background capitalize"
          style={{ fontFamily: "cursive" }}
        >
          get in touch
        </h1>

        <p className="leading-7 lg:text-lg lg:leading-8">
          We&apos;re here to assist you. If you have any questions, feedback, or
          need assistance, please don&apos;t hesitate to get in touch with us.
          Our friendly and knowledgeable customer support team is ready to help.
        </p>

        <div className="space-y-2">
          {infoObj.map((item, index) => {
            return <Info key={index} options={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
