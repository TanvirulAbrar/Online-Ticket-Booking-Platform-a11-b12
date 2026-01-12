import React from "react";
import ShowcaseBase from "./ShowcaseBase";
import { SHOWCASE_SECTIONS } from "./sections";

const Showcase1 = () => {
  return <ShowcaseBase sections={SHOWCASE_SECTIONS} pageNum={1} perPage={4} />;
};

export default Showcase1;
