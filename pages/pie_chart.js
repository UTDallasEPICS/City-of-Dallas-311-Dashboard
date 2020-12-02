import React from "react";
import {PieChart, Pie, Sector, Cell} from "recharts";

export const App = () => {
  const data = [
    {name: "2011", value: 200},
    {name: "2012", value: 100},
    {name: "2013", value: 350},
    {name: "2014", value: 350},
  ];

  return (
    <div className = "App">
      <h1> PieChart_City Of Dallas_Samplation </h1>
      <PieChart width={400} height ={400}>
        <Pie
          dataKey = "value"
          isAnimationActive = {false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="white"
          label
          />
        </PieChart>
    </div>
  );
};

export default App;