/* File creates a vertical bar graph distribution for all cases from json file with status of 
open, closed, and in progress */

import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import serviceRequests from '../pages/dummydata.json';

function BarGraph() {

    var councilDistrict1Closed = 0;
    var councilDistrict1New = 0;
    var councilDistrict1Progress = 0;

    var councilDistrict2Closed = 0;
    var councilDistrict2New = 0;
    var councilDistrict2Progress = 0;

    var councilDistrict3Closed = 0;
    var councilDistrict3New = 0;
    var councilDistrict3Progress = 0;

    var councilDistrict4Closed = 0;
    var councilDistrict4New = 0;
    var councilDistrict4Progress = 0;

    var councilDistrict5Closed = 0;
    var councilDistrict5New = 0;
    var councilDistrict5Progress = 0;

    var councilDistrict6Closed = 0;
    var councilDistrict6New = 0;
    var councilDistrict6Progress = 0;

    var councilDistrict7Closed = 0;
    var councilDistrict7New = 0;
    var councilDistrict7Progress = 0;

    var councilDistrict8Closed = 0;
    var councilDistrict8New = 0;
    var councilDistrict8Progress = 0;

    var councilDistrict9Closed = 0;
    var councilDistrict9New = 0;
    var councilDistrict9Progress = 0;

    var councilDistrict10Closed = 0;
    var councilDistrict10New = 0;
    var councilDistrict10Progress = 0;

    var councilDistrict11Closed = 0;
    var councilDistrict11New = 0;
    var councilDistrict11Progress = 0;

    var councilDistrict12Closed = 0;
    var councilDistrict12New = 0;
    var councilDistrict12Progress = 0;

    var councilDistrict13Closed = 0;
    var councilDistrict13New = 0;
    var councilDistrict13Progress = 0;

    var councilDistrict14Closed = 0;
    var councilDistrict14New = 0;
    var councilDistrict14Progress = 0;


    var d = serviceRequests;
    for (var i = 0; i < d.length; i++) {
        if (d[i].Council_District__c == "1") {
            if (d[i].Status == "Closed") {
                councilDistrict1Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict1New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict1Progress++;
            }
        }

        if (d[i].Council_District__c == "2") {
            if (d[i].Status == "Closed") {
                councilDistrict2Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict2New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict2Progress++;
            }
        }

        if (d[i].Council_District__c == "3") {
            if (d[i].Status == "Closed") {
                councilDistrict3Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict3New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict3Progress++;
            }
        }

        if (d[i].Council_District__c == "4") {
            if (d[i].Status == "Closed") {
                councilDistrict4Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict4New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict4Progress++;
            }
        }

        if (d[i].Council_District__c == "5") {
            if (d[i].Status == "Closed") {
                councilDistrict5Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict5New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict5Progress++;
            }
        }

        if (d[i].Council_District__c == "6") {
            if (d[i].Status == "Closed") {
                councilDistrict6Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict6New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict6Progress++;
            }
        }

        if (d[i].Council_District__c == "7") {
            if (d[i].Status == "Closed") {
                councilDistrict7Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict7New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict7Progress++;
            }
        }

        if (d[i].Council_District__c == "8") {
            if (d[i].Status == "Closed") {
                councilDistrict8Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict8New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict8Progress++;
            }
        }

        if (d[i].Council_District__c == "9") {
            if (d[i].Status == "Closed") {
                councilDistrict9Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict9New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict9Progress++;
            }
        }

        if (d[i].Council_District__c == "10") {
            if (d[i].Status == "Closed") {
                councilDistrict10Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict10New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict10Progress++;
            }
        }

        if (d[i].Council_District__c == "11") {
            if (d[i].Status == "Closed") {
                councilDistrict11Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict11New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict11Progress++;
            }
        }

        if (d[i].Council_District__c == "12") {
            if (d[i].Status == "Closed") {
                councilDistrict12Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict12New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict12Progress++;
            }
        }

        if (d[i].Council_District__c == "13") {
            if (d[i].Status == "Closed") {
                councilDistrict13Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict13New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict13Progress++;
            }
        }

        if (d[i].Council_District__c == "14") {
            if (d[i].Status == "Closed") {
                councilDistrict14Closed++;
            }
            if (d[i].Status == "New") {
                councilDistrict14New++;
            }
            if (d[i].Status == "In Progress") {
                councilDistrict14Progress++;
            }
        }
    }


    const data = [
        {
            District: '1', Closed: councilDistrict1Closed, New: councilDistrict1New, Progress: councilDistrict1Progress,
        },
        {
            District: '2', Closed: councilDistrict2Closed, New: councilDistrict2New, Progress: councilDistrict2Progress,
        },
        {
            District: '3', Closed: councilDistrict3Closed, New: councilDistrict3New, Progress: councilDistrict3Progress,
        },
        {
            District: '4', Closed: councilDistrict4Closed, New: councilDistrict4New, Progress: councilDistrict4Progress,
        },
        {
            District: '5', Closed: councilDistrict5Closed, New: councilDistrict5New, Progress: councilDistrict5Progress,
        },
        {
            District: '6', Closed: councilDistrict6Closed, New: councilDistrict6New, Progress: councilDistrict6Progress,
        },
        {
            District: '7', Closed: councilDistrict7Closed, New: councilDistrict7New, Progress: councilDistrict7Progress,
        },
        {
            District: '8', Closed: councilDistrict8Closed, New: councilDistrict8New, Progress: councilDistrict8Progress,
        },
        {
            District: '9', Closed: councilDistrict9Closed, New: councilDistrict9New, Progress: councilDistrict9Progress,
        },
        {
            District: '10', Closed: councilDistrict10Closed, New: councilDistrict10New, Progress: councilDistrict10Progress,
        },
        {
            District: '11', Closed: councilDistrict11Closed, New: councilDistrict11New, Progress: councilDistrict11Progress,
        },
        {
            District: '12', Closed: councilDistrict12Closed, New: councilDistrict12New, Progress: councilDistrict12Progress,
        },
        {
            District: '13', Closed: councilDistrict13Closed, New: councilDistrict13New, Progress: councilDistrict13Progress,
        },
        {
            District: '14', Closed: councilDistrict14Closed, New: councilDistrict14New, Progress: councilDistrict14Progress,
        },
      ];


      const title = {
        color: "black",
        padding: "20px",
        fontFamily: "Arial",
        position: 'absolute',
        left: "100px",
        top:"-30px",
        fontSize: "20px"
      };


    return (


        <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 30, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <BarChart title="Chart of PU x UV">...</BarChart>
        <XAxis dataKey="District" label={{ value: 'Districts', position: 'insideBottomRight', offset: 0, }}/>
        <YAxis label={{ value: 'Service Requests', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="New" stackId="a" fill="#fe0000" />
        <Bar dataKey="Progress" stackId="a" fill="#0008ff" />
        <Bar dataKey="Closed" fill="#46db18" />
      </BarChart>

            
        );
}

export default BarGraph;