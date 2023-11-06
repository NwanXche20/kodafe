import React from "react";
import {
  FaPeopleGroup,
  FaPersonSwimming,
  FaUnlockKeyhole,
  FaSuperpowers,
  FaHandshake,
  FaBoxesPacking,
} from "react-icons/fa6";

const values = [
  {
    icon: <FaSuperpowers />,
    heading: "Quality Fish Seeds",
    content:
      "When it comes to fingerlings, we're at the top of the food chain! 🐟🌱 Kodafe Farms offers an impressive variety of high-quality fish seeds, including GIFT Tilapia, Pangasius, Hybrid Catfish, Clarias Catfish, and more. Our fish seeds are the best start for a successful aquaculture journey, promising healthy and robust growth from day one!",
  },
  {
    icon: <FaPeopleGroup />,
    heading: "Innovation That Matters",
    content:
      "We take innovation seriously - it's our secret sauce! 🚀💡 At Kodafe Farms, our modern hatcheries powered by the advanced Re-circulatory Aquaculture System (RAS) technology set the gold standard in sustainable farming. RAS ensures efficient water usage, creating a greener, eco-friendly environment for our fish and our planet!",
  },
  {
    icon: <FaPersonSwimming />,
    heading: "Swimming Towards Sustainability",
    content:
      "We're not just about profits; we're committed to making a positive impact! 🌍💚 By choosing Kodafe Farms, you're supporting sustainable development goals that promote a better world. Together, we strive to contribute to Goals 1, 2, 5, 9, 13, 14, and 17 of the Sustainable Development Goals (SDGs).",
  },
  {
    icon: <FaBoxesPacking />,
    heading: "Keeping It Fresh and Delicious",
    content:
      "Freshness is our mission, and we nail it every time! 🧊🍽️ With expert cold chain management, our fish stay as fresh as a sea breeze, preserving their taste and quality from farm to plate. Experience the delight of seafood at its finest, sourced straight from our farms to your table!",
  },
  {
    icon: <FaUnlockKeyhole />,
    heading: "Unlocking Wisdom",
    content:
      "Knowledge is the key to success! 📚💡 At Kodafe Farms, we love to share our expertise through training, consultancy, and internship programs. Whether you're an aquaculture enthusiast or a newbie, our aim is to empower you with the skills and know-how to thrive in the world of fish farming!",
  },
  {
    icon: <FaHandshake />,
    heading: "Customer Happiness is Our Priority",
    content:
      "Your satisfaction is our ultimate catch! 🎣👏 We take pride in delivering the best products and services, ensuring your aquaculture experience is smooth and rewarding. We're here to address your queries, provide support, and make sure you have a fin-tastic time with Kodafe Farms!",
  },
];

function Value({ options }) {
  return (
    <div className="bg-[#f8f8f1]">
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

function OurValues() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <h1
        className="text-4xl leading-[50px] lg:text-6xl lg:leading-[70px] font-medium text-background max-w-4xl"
        style={{ fontFamily: "cursive" }}
      >
        The values that drive everything we do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {values.map((value, index) => {
          return <Value key={index} options={value} />;
        })}
      </div>
    </div>
  );
}

export default OurValues;
