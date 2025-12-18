import React from "react";
import Banner from "../Banner/Banner";
import NavItems from "../Banner/NavItems";
import Adds from "../Ads/Adds";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import PopularRoutes from "../PopularRoutes/PopularRoutes";
import LatestTickets from "../LatestTickets/LatestTickets";
// import Brands from "../Brands/Brands";
// import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NavItems></NavItems>
      <Adds></Adds>
      <LatestTickets></LatestTickets>
      <PopularRoutes></PopularRoutes>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
