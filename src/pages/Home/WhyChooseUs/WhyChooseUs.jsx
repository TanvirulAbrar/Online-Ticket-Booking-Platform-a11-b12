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
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
