import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "./banner1.jpg";
import bannerImg2 from "./banner2.jpg";
import bannerImg3 from "./banner3.jpg";

const Banner = () => {
  const card = [bannerImg1, bannerImg2, bannerImg3];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {card.map((card, i) => {
        return (
          <div key={i} className="h-[300px] relative">
            <img className=" items-center-safe " src={card} />
            <div className=" absolute  left-20 p-4 text-white  bg-opacity-50 top-20  text-start  z-10">
              <p className="text-4xl">
                {" "}
                Welcome to <span className="font-bold">TicketZone!</span>
              </p>
              <p className="text-xl"> Find Flights, Hotels, Visa & Holidays</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
