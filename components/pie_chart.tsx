import { title } from "process";
import React from "react";
import { Interface } from "readline";
import { PieChart, Pie, Sector, Cell } from "recharts";

export interface PieProps {
  title: string
}

export const PieG = () => {
  const data = [
    { name: "2011", value: 200 },
    { name: "2012", value: 100 },
    { name: "2013", value: 350 },
    { name: "2014", value: 350 },
  ];

  return (
    <div className="PieG" style={{ gridArea: "PieG" }}>
      <h1> Number of requests per district </h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="black"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieG;