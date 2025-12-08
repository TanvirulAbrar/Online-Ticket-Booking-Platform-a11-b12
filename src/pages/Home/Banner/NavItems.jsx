import React, { useState } from "react";
import {
  Plane,
  Home,
  ShoppingBag,
  Sun,
  Tag,
  Gift,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
} from "lucide-react";
import TicketBox from "./TicketBox";

export default function NavItems({ layout = "row" }) {
  const dataEconomy = [
    "Economy",
    "Premium",
    "Economy",
    "Business",
    "First Class",
  ];
  const dataType = ["Regular Fare", "Student Fare", "Umrah Fare"];
  const [dataEconomyText, setdataEconomyText] = useState("Economy");
  const data = [
    {
      key: "adults",
      title: "Adults",
      subtitle: "12 years & above",
    },
    {
      key: "children",
      title: "Children",
      subtitle: "From 5 to under 12",
    },
    {
      key: "kids",
      title: "Kids",
      subtitle: "From 2 to under 5",
    },
    {
      key: "infants",
      title: "Infants",
      subtitle: "Under 2 years",
    },
  ];
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const changeCount = (key, amount) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + amount),
    }));
  };
  const items = [
    { key: "flight", label: "Flight", Icon: Plane },
    { key: "hotel", label: "Hotel", Icon: Home },
    { key: "shop", label: "Shop", Icon: ShoppingBag },
    { key: "holiday", label: "Holiday", Icon: Sun },
    { key: "promotions", label: "Promotions", Icon: Tag },
    { key: "gift", label: "Gift Card", Icon: Gift },
  ];

  return (
    <nav className="relative  w-fit flex-wrap font-semibold bg-white rounded-2xl shadow-2xl shadow-[#adadad] text-sm text-gray-500 mx-auto content-center p-5 translate-y-[-50px] items-center">
      <div
        className={
          layout === "row"
            ? "flex gap-3 w-fit flex-wrap items-center"
            : "grid grid-cols-2   sm:grid-cols-3 gap-3"
        }
      >
        {items.map(({ key, label, Icon }) => (
          <button
            key={key}
            type="button"
            className="group flex flex-wrap  items-center gap-2 p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg hover:scale-[1.03] transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            onClick={() => console.log(label)}
          >
            <span className="p-2 rounded-full bg-white shadow-sm">
              <Icon className="w-6 h-6" />
            </span>
            <span className="text-sm max-md:hidden text-gray-700">{label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-between items-center">
        {/* 3 */}
        <div className="flex flex-wrap  gap-6 my-5 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              className="peer w-4 h-4"
              defaultChecked
            />

            <span>One Way</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="trip" className="peer w-4 h-4" />

            <span>Round Trip</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              className="peer w-4 h-4 font-bold"
            />

            <span>Multi City</span>
          </label>
        </div>
        <div className="flex flex-wrap max-sm gap-1">
          {/* 1 */}
          <div className="relative w-fit ">
            <button
              onClick={() => setOpen(!open)}
              className="bg-blue-100 w-full p-2 px-5 rounded-[5px] flex justify-center items-center text-center  text-[14px] text-blue-500 "
            >
              <span className="font-semibold">
                Passengers:{" "}
                {counts.adults + counts.children + counts.kids + counts.infants}
              </span>
              {open ? <ChevronUp /> : <ChevronDown />}
            </button>

            {open && (
              <div className="absolute mt-2 w-fit bg-white shadow-xl rounded-xl p-4 z-20 space-y-4">
                {data.map((item) => (
                  <div
                    key={item.key}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => changeCount(item.key, -1)}
                        className="p-1 border rounded-full hover:bg-gray-100 disabled:opacity-50"
                        disabled={counts[item.key] === 0}
                      >
                        <Minus size={18} />
                      </button>

                      <span className="w-5 text-center font-semibold">
                        {counts[item.key]}
                      </span>

                      <button
                        onClick={() => changeCount(item.key, 1)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setOpen(false)}
                  className="w-full bg-blue-600 text-white p-2 rounded-lg mt-2"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
          {/* 2 */}
          <div className="relative w-fit ">
            <button
              onClick={() => setOpen2(!open2)}
              className="bg-blue-100 w-full p-2 px-5 rounded-[5px] flex justify-center items-center text-center  text-[14px] text-blue-500 "
            >
              <span className="font-semibold">{dataEconomyText}</span>
              {open2 ? <ChevronUp /> : <ChevronDown />}
            </button>

            {open2 && (
              <div className="absolute mt-2 w-full bg-white shadow-xl rounded-xl p-4 z-20 space-y-4">
                {dataEconomy.map((item, i) => (
                  <label
                    key={item + 1}
                    onClick={() => setdataEconomyText(dataEconomy[i])}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="trip"
                      className="peer w-4 h-4 font-bold"
                    />

                    <span>{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <TicketBox></TicketBox>
      <div className=" mt-2  w-full flex flex-wrap rounded-xl  gap-5">
        {dataType.map((item) => (
          <label
            key={item + 1 + "t"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="trip"
              className="peer w-4 h-4 font-bold"
            />

            <span>{item}</span>
          </label>
        ))}
      </div>
    </nav>
  );
}
