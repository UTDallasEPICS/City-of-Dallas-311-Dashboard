import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { ServiceRequest } from "./types";

type ReportProps = {
  serviceRequests: ServiceRequest[]
}

class SpecificCompare extends React.Component<ReportProps> {
  constructor(props: ReportProps) {
    super(props);
  };
  render() {
    const councilDistricts: { [index: string]: { closed: number, new: number, progress: number } } = {}

    for (const sr of this.props.serviceRequests) {
      if (!councilDistricts[sr.Council_District__c]) {
        councilDistricts[sr.Council_District__c] = { closed: 0, new: 0, progress: 0 };
      }
      if (sr.Status == "Closed") {
        councilDistricts[sr.Council_District__c].closed++;
      }
      if (sr.Status == "New") {
        councilDistricts[sr.Council_District__c].new++;
      }
      if (sr.Status == "In Progress") {
        councilDistricts[sr.Council_District__c].progress++;
      }
    }

    const data = Object.keys(councilDistricts).map(k => {
      return {
        District: k,
        Closed: councilDistricts[k].closed,
        New: councilDistricts[k].new,
        Progress: councilDistricts[k].progress
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
      <BarChart
        width={500}
        height={500}
        data={data}
        style={{ gridArea: 'SpecificCompare' }}
        margin={{
          top: 30, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <BarChart title="Chart of PU x UV">...</BarChart>
        <XAxis dataKey="District" label={{ value: 'Districts', position: 'insideBottomRight', offset: 0, }} />
        <YAxis label={{ value: 'Service Requests', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="New" stackId="a" fill="#fe0000" />
        <Bar dataKey="Progress" stackId="a" fill="#0008ff" />
        <Bar dataKey="Closed" fill="#46db18" />
      </BarChart>
    );
  }
}
export default SpecificCompare;