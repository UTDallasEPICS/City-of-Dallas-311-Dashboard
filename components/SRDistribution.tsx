/* File creates a circle chart distribution for all the cases in the json file 
with open, closed, and in progress cases. */

import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ServiceRequest } from "./types";

function SRDistribution({ serviceRequests }: { serviceRequests: ServiceRequest[] }) {

  var d = serviceRequests;
  var progressRequests = 0;
  var closedRequests = 0;
  var newRequests = 0;
  var totalRequests = d.length;
  for (var i = 0; i < d.length; i++) {
    if (d[i].Status == "Closed") {
      closedRequests++;
    }
    if (d[i].Status == "New") {
      newRequests++;
    }
    if (d[i].Status == "In Progress") {
      progressRequests++;
    }
  }

  var data = [
    { name: "progressRequests", value: progressRequests },
    { name: "closedRequests", value: closedRequests },
    { name: "newRequests", value: newRequests }
  ]

  const totalRequestsHeader = {
    color: "black",
    padding: "20px",
    fontFamily: "Arial",

    left: "57px",
    top: "210px",
    fontSize: "14px"
  };

  const keyLabels = {
    fontFamily: "Arial",
    fontSize: "14px",
    left: "100px",
    top: "-30px",
  };

  const table = {
    left: "250px",
    top: "170px",
  };

  const totalRequestsQuantity = {
    fontFamily: "Arial",
    left: "115px",
    top: "240px",
  };



  const COLORS = ['#fe0000', '#46db18', '#0008ff'];


  return (

    <div style={{ gridArea: 'SRDistribution' }}>
      <table>
        <tr>
          <td>

            <h2 style={totalRequestsHeader}> Total Requests: </h2>
            <h2 style={totalRequestsQuantity}> {totalRequests} </h2>

            <PieChart width={800} height={400}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
                <Tooltip />
              </Pie>
            </PieChart>
          </td>
          <td>

            <table style={table} >
              <tr>
                <td>
                  <svg height="50" width="50">
                    <circle cx="25" cy="25" r="5" fill="#fe0000" />
                  </svg>
                </td>
                <td>
                  <h2 style={keyLabels}> New </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <svg height="50" width="50">
                    <circle cx="25" cy="25" r="5" fill="#0008ff" />
                  </svg>
                </td>

                <td>
                  <h2 style={keyLabels}> In Progress </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <svg height="50" width="50">
                    <circle cx="25" cy="25" r="5" fill="#46db18" />
                  </svg>
                </td>

                <td>
                  <h2 style={keyLabels}> Closed </h2>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default SRDistribution;