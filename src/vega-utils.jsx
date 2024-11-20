import React, { useState } from "react";
import { VegaLite } from "react-vega";
import chartSpec from "../src/Routen_Flughäfen_USA.json";

const VegaChart = () => {
  return <VegaLite spec={chartSpec} />;
};

export default VegaChart;
