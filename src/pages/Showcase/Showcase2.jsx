import React from "react";
import ShowcaseBase from "./ShowcaseBase";
import { SHOWCASE_SECTIONS } from "./sections";

const Showcase2 = () => {
  return <ShowcaseBase sections={SHOWCASE_SECTIONS} pageNum={2} perPage={4} />;
};

export default Showcase2;
