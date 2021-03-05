import React from "react";
import { render } from "react-dom";
import { ResponsiveBar } from "@nivo/bar";
import data2 from "./data2.json";
import data from "./data.json";
import MyResponsiveBar from "./MyResponsiveBar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Nivo basic demo</h1>
    <div style={{ height: "400px" }}>
      <MyResponsiveBar data={data2} />
    </div>
    <div style={{ height: "400px" }}>
      <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter" />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
