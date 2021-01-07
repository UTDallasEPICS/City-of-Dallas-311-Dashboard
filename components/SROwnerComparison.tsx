/* File creates a horizontal bar graph distribution from the cases in the json file for the service request
 they belong to, as well as the status of the case (open, in progress, closed). */

import React, { PureComponent } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import serviceRequests from '../pages/dummydata.json';


function HorizontalGraph() {

  
  var d = serviceRequests;
  var intensiveCareSolutionRequestsClosed = 0;
  var intensiveCareSolutionRequestsTotal = 0;
  var intensiveCareSolutionRequestsNew = 0;

  var emergencyRegulationsViolationsClosed = 0;
  var emergencyRegulationsViolationsTotal = 0;
  var emergencyRegulationsViolationsNew = 0;

  for (var i = 0; i < d.length; i++)
  {
      if (d[i].SR_Owner__c == "ICR (Intensive Case Resolution)")
      {
        if (d[i].Status == "Closed"){
        intensiveCareSolutionRequestsClosed++;
        intensiveCareSolutionRequestsTotal++;
        }
        if (d[i].Status == "New")
        {
          intensiveCareSolutionRequestsNew++;
          intensiveCareSolutionRequestsTotal++;
        }
        if (d[i].Status == "In Progress")
        {
          intensiveCareSolutionRequestsTotal++;
        }
      }

      
      if (d[i].SR_Owner__c == "Emergency Regulations Violation")
      {
        if (d[i].Status == "Closed") {
          emergencyRegulationsViolationsClosed++;
          emergencyRegulationsViolationsTotal++;
        }
        if (d[i].Status == "New")
        {
          emergencyRegulationsViolationsTotal++;
          emergencyRegulationsViolationsNew++;
        }
        if (d[i].Status == "In Progress")
        {
          emergencyRegulationsViolationsTotal++;
        }
      }
  }
  
  
  const data = [
    {
      name: 'Intensive Care Solution', Total: intensiveCareSolutionRequestsTotal, Closed: intensiveCareSolutionRequestsClosed, New: intensiveCareSolutionRequestsNew
    },
    {
      name: 'Emergency Regulations Violations', Total: emergencyRegulationsViolationsTotal, Closed: emergencyRegulationsViolationsClosed, New: emergencyRegulationsViolationsNew
    },
  ]

  return (

<ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Area dataKey="Closed" fill="#46db18" stroke="#46db18" />
        <Bar dataKey="Total" barSize={20} fill="#0008ff" />
        <Line dataKey="New" stroke="#fe0000" />
      </ComposedChart>

  );
}
export default HorizontalGraph;
