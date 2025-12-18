import React from "react";
import {
  AiFillSafetyCertificate,
  AiFillStar,
  AiFillClockCircle,
  AiFillCustomerService,
} from "react-icons/ai";

const features = [
  {
    title: "Trusted & Secure",
    description: "We prioritize your safety and data security above all.",
    icon: (
      <AiFillSafetyCertificate className="text-5xl text-green-500 mb-4 mx-auto" />
    ),
  },
  {
    title: "Top Ratings",
    description: "Rated excellent by thousands of satisfied customers.",
    icon: <AiFillStar className="text-5xl text-yellow-400 mb-4 mx-auto" />,
  },
  {
    title: "24/7 Support",
    description: "Always here to help you, anytime you need us.",
    icon: (
      <AiFillCustomerService className="text-5xl text-blue-500 mb-4 mx-auto" />
    ),
  },
  {
    title: "On-Time Service",
    description: "Punctuality is our promise to you every single time.",
    icon: (
      <AiFillClockCircle className="text-5xl text-purple-500 mb-4 mx-auto" />
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-[1000px] p-5 mx-auto">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl font-bold flex  my-5">
          <div className="w-[5px] mr-5 bg-blue-700"></div>Why choose us?
          <div className="w-[5px] ml-5 bg-blue-700"></div>
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
