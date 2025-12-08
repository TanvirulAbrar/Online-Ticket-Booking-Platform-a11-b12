import React from "react";
import Banner from "../Banner/Banner";
import NavItems from "../Banner/NavItems";
// import Brands from "../Brands/Brands";
// import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NavItems></NavItems>
      {/* <Brands></Brands> */}
      {/* <Reviews reviewsPromise={reviewsPromise}></Reviews> */}
    </div>
  );
};

export default Home;
