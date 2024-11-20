import React from "react";
import { Container, Typography } from "@mui/material";
import VegaChart from "./vega-utils.jsx";

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Vega-Lite Chart Example
      </Typography>
      <VegaChart />
    </Container>
  );
};

export default App;
