import React from "react";

import {
  FaScrewdriverWrench,
  FaPersonWalkingArrowLoopLeft,
  FaSlideshare,
  FaSuperpowers,
  FaScrewdriver,
  FaDoorClosed,
  FaPeopleArrows,
  FaRecycle,
} from "react-icons/fa6";

const values = [
  {
    icon: <FaSuperpowers />,
    heading: "Premium Fish Seeds",
    content:
      "Dive into success with our top-quality fingerlings of GIFT Tilapia, Pangasius, Hybrid Catfish, Clarias Catfish, and more.",
  },
  {
    icon: <FaScrewdriverWrench />,
    heading: "Modern Hatcheries",
    content:
      "Experience innovation at its finest with our state-of-the-art hatcheries powered by Re-circulatory Aquaculture System (RAS) technology.",
  },
  {
    icon: <FaPersonWalkingArrowLoopLeft />,
    heading: "Sustainable Practices",
    content:
      "We are committed to promoting sustainable development goals and protecting the environment.",
  },
  {
    icon: <FaRecycle />,
    heading: "Cold Chain Management",
    content:
      "Enjoy freshness at its best with our expert cold chain, ensuring top-quality fish from farm to plate.",
  },
  {
    icon: <FaPeopleArrows />,
    heading: "Knowledge Sharing",
    content:
      "Unlock the secrets of aquaculture through our training, consultancy, and internship programs.",
  },
  {
    icon: <FaScrewdriver />,
    heading: "Hatcheries",
    content: "Catfish|Tilapia/Pangasius",
  },
  {
    icon: <FaDoorClosed />,
    heading: "Cold room",
    content: "Frozen Fish/Cold Chain Service",
  },
  {
    icon: <FaSlideshare />,
    heading: "Training",
    content: "Aquaculture/Fish breeding and Growing",
  },
];

function Value({ options }) {
  return (
    <div className="bg-yellow-100 hover:bg-yellow-300">
      <div className="flex flex-col justify-center items-center gap-6 py-12 px-6 text-center">
        <div className="w-20 h-20 rounded-full border border-background flex justify-center items-center text-background text-4xl">
          {options.icon}
        </div>

        <div className="space-y-5">
          <h3 className="font-semibold text-xl capitalize">
            {options.heading}
          </h3>

          <p className="leading-7 lg:leading-8">{options.content}</p>
        </div>
      </div>
    </div>
  );
}

function OurServices() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="space-y-3 lg:space-y-6">
        <h1
          className="text-4xl leading-[50px] lg:text-6xl lg:leading-[70px] font-medium text-background text-center mx-auto max-w-4xl"
          style={{ fontFamily: "cursive" }}
        >
          Services we provide
        </h1>

        <p className="leading-7 lg:text-lg lg:leading-8 text-center mx-auto max-w-4xl">
          At Kodafe Farms, we offer a sea of exceptional services tailored to
          meet your aquaculture needs:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {values.map((value, index) => {
          return <Value key={index} options={value} />;
        })}
      </div>
    </div>
  );
}

export default OurServices;
