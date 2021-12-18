/* File creates a vertical bar graph distribution for all cases from json file showing comparison of total
vs closed cases with bar and area graph */

import React, { PureComponent } from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { ServiceRequest } from "./types";

type ReportProps = {
    serviceRequests: ServiceRequest[]
  }
  
  class ClosedCompare extends React.Component<ReportProps> {
    constructor(props: ReportProps) {
      super(props);
    };
    render() {
      const councilDistricts: { [index: string]: { Closed: number, Total: number,} } = {}
  
      for (const sr of this.props.serviceRequests) {
        if (!councilDistricts[sr.Council_District__c]) {
          councilDistricts[sr.Council_District__c] = { Closed: 0, Total: 0};
        }
        if (sr.Status == "Closed") {
          councilDistricts[sr.Council_District__c].Closed++;
          councilDistricts[sr.Council_District__c].Total++;
        }
        if (sr.Status == "New") {
          councilDistricts[sr.Council_District__c].Total++;
        }
        if (sr.Status == "In Progress") {
          councilDistricts[sr.Council_District__c].Total++;
        }
      }
  
      const data = Object.keys(councilDistricts).map(k => {
        return {
          District: k,
          Closed: councilDistricts[k].Closed,
          Total: councilDistricts[k].Total,
        }
      }
      )

    const title = {
        color: "black",
        padding: "20px",
        fontFamily: "Arial",

        left: "100px",
        top: "-30px",
        fontSize: "20px"
    };


    return (


        <ComposedChart
            width={500}
            height={400}
            data={data}
            style={{ gridArea: 'ClosedCompare' }}
            margin={{
                top: 20, right: 20, bottom: 20, left: 20,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="District" label={{ value: 'Districts', position: 'insideBottomRight', offset: 0, }} />
            <YAxis label={{ value: 'Service Requests', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Closed" fill="#46db18" stroke="#46db18" />
            <Bar dataKey="Total" barSize={20} fill="#0008ff" />
            {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>


      );
    }
  }

export default ClosedCompare;