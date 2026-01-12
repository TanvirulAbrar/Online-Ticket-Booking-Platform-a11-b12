import React from "react";
import ShowcaseBase from "./ShowcaseBase";
import { SHOWCASE_SECTIONS } from "./sections";

const Showcase3 = () => {
  return <ShowcaseBase sections={SHOWCASE_SECTIONS} pageNum={3} perPage={4} />;
};

export default Showcase3;
