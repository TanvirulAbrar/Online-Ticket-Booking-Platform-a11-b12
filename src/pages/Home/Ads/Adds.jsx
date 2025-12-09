import React from "react";

const Adds = () => {
  return (
    <div className="max-w-[1000px] p-5 mx-auto">
      <h1 className="text-3xl font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>Advertisement
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>

      <div className="bg-[url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg')] bg-cover rounded-2xl overflow-hidden w-100 h-40 group relative">
        <div className="h-40  w-full ">
          <div className=" top-0 left-0 w-full h-40 bg-linear-to-r from-[#fff0] p-5 via-[#53a0f800] to-blue-500 text-white">
            <h1 className="font-bold  bg-blue-500 w-fit rounded-[5px] px-5">
              Title
            </h1>

            <div className="flex self-baseline justify-between">
              {" "}
              <div className="flex flex-wrap text-[12px] gap-2">
                <p className="bg-white  text-gray-400 w-fit rounded-[5px] px-5">
                  Price
                </p>
                <p className="bg-white text-gray-400 w-fit rounded-[5px] px-5">
                  Quantity
                </p>
                <p className="bg-white text-gray-400 w-fit rounded-[5px] px-5">
                  {" "}
                  Transport type
                </p>
                <p className="bg-white text-gray-400 w-fit rounded-[5px] px-5">
                  {" "}
                  Perks
                </p>
              </div>
              <div className="flex justify-end">
                <p className="w-fit ">See details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
