import React from "react";
import { MdFlightTakeoff, MdLocationOn } from "react-icons/md";
const popularRoutesData = [
  {
    category: "Top Domestic Routes (Bangladesh)",
    routes: [
      "Dhaka ↔ Chattogram",
      "Dhaka ↔ Saidpur",
      "Dhaka ↔ Sylhet",
      "Dhaka ↔ Cox's Bazar",
    ],
  },
  {
    category: "Top International Routes",
    routes: [
      "Dhaka ↔ Singapore",
      "Dhaka ↔ Dubai",
      "Dhaka ↔ Bangkok",
      "Dhaka ↔ Kuala Lumpur",
    ],
  },
  {
    category: "Popular Train / Bus Routes (Europe)",
    routes: [
      "Berlin ↔ Paris (train)",
      "Madrid ↔ Barcelona (train)",
      "Amsterdam ↔ Brussels (train)",
      "London ↔ Manchester (bus)",
    ],
  },
];

const PopularRoutes = () => {
  return (
    <section className="max-w-[1000px] p-5 mx-auto">
      <h1 className="text-3xl font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div> Popular Routes
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {popularRoutesData.map((group, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="flex items-center text-2xl font-semibold mb-6 text-secondary">
              <MdFlightTakeoff className="text-3xl mr-3 text-indigo-500" />
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.routes.map((route, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <MdLocationOn className="mr-2 text-lg text-indigo-400" />
                  <span className="text-md font-medium">{route}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
