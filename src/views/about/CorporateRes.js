import React from "react";

import {
  FaPeopleGroup,
  FaHandsHoldingCircle,
  FaPersonWalkingArrowLoopLeft,
  FaSuperpowers,
  FaHandshake,
  FaHandHoldingMedical,
} from "react-icons/fa6";

const values = [
  {
    icon: <FaPersonWalkingArrowLoopLeft />,
    heading: "Sustainability First",
    content:
      "We prioritize sustainable aquaculture, minimizing our environmental impact.",
  },
  {
    icon: <FaPeopleGroup />,
    heading: "Empowering Communities",
    content: "We support local communities and promote social well-being",
  },
  {
    icon: <FaSuperpowers />,
    heading: "Ethical Standards",
    content:
      "Transparency, fairness, and respect define our business practices",
  },
  {
    icon: <FaHandHoldingMedical />,
    heading: "Employee Well-being",
    content: "We value our employees' safety, growth, and work-life balance",
  },
  {
    icon: <FaHandsHoldingCircle />,
    heading: "Resource Efficiency",
    content: "We optimize resources, conserve energy, and reduce waste",
  },
];

function Responsiblity({ options }) {
  return (
    <div className="bg-yellow-100 p-10 lg:p-12 flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-10 lg:gap-10">
      <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-4xl">
        {options.icon}
      </div>

      <div className="space-y-4 flex-1">
        <h3 className="font-semibold text-xl capitalize">{options.heading}</h3>

        <p className="leading-7 lg:leading-8">{options.content}</p>
      </div>
    </div>
  );
}

function CorporateRes() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <h1
        className="text-4xl leading-[50px] lg:text-6xl lg:leading-[70px] font-medium text-background text-center lg:text-left capitalize"
        style={{ fontFamily: "cursive" }}
      >
        corporate responsibility policy
      </h1>

      <div className="space-y-6 lg:space-y-8 lg:self-center">
        <p className="leading-7 lg:text-lg lg:leading-8">
          At Kodafe Farms, we embrace corporate responsibility as a guiding
          principle:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => {
            return <Responsiblity key={index} options={value} />;
          })}
        </div>

        <p className="leading-7 lg:text-lg lg:leading-8">
          Join us in our responsible journey for a brighter future.
        </p>
      </div>
    </div>
  );
}

export default CorporateRes;
