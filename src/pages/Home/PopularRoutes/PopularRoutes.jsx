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
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Routes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the most traveled destinations and book your journey to popular routes worldwide.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutesData.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
            >
              <h3 className="flex items-center text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                <MdFlightTakeoff className="text-2xl mr-3 text-blue-500" />
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.routes.map((route, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
                  >
                    <MdLocationOn className="mr-3 text-lg text-blue-400 group-hover:text-blue-600 transition-colors" />
                    <span className="font-medium">{route}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
