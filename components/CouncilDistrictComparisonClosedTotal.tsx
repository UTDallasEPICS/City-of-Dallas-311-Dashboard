/* File creates a vertical bar graph distribution for all cases from json file showing comparison of total
vs closed cases with bar and area graph */

import React, { PureComponent } from 'react';
import { ComposedChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { ServiceRequest } from "./types";

function ClosedCompare({ serviceRequests }: { serviceRequests: ServiceRequest[] }) {

    var councilDistrict1Closed = 0;
    var councilDistrict1Total = 0;

    var councilDistrict2Closed = 0;
    var councilDistrict2Total = 0;


    var councilDistrict3Closed = 0;
    var councilDistrict3Total = 0;


    var councilDistrict4Closed = 0;
    var councilDistrict4Total = 0;


    var councilDistrict5Closed = 0;
    var councilDistrict5Total = 0;


    var councilDistrict6Closed = 0;
    var councilDistrict6Total = 0;


    var councilDistrict7Closed = 0;
    var councilDistrict7Total = 0;


    var councilDistrict8Closed = 0;
    var councilDistrict8Total = 0;


    var councilDistrict9Closed = 0;
    var councilDistrict9Total = 0;


    var councilDistrict10Closed = 0;
    var councilDistrict10Total = 0;


    var councilDistrict11Closed = 0;
    var councilDistrict11Total = 0;


    var councilDistrict12Closed = 0;
    var councilDistrict12Total = 0;


    var councilDistrict13Closed = 0;
    var councilDistrict13Total = 0;


    var councilDistrict14Closed = 0;
    var councilDistrict14Total = 0;


    var d = serviceRequests;
    for (var i = 0; i < d.length; i++) {
        if (d[i].Council_District__c == "1") {
            if (d[i].Status == "Closed") {
                councilDistrict1Closed++;
            }
            councilDistrict1Total++;

        }

        if (d[i].Council_District__c == "2") {
            if (d[i].Status == "Closed") {
                councilDistrict2Closed++;
            }
            councilDistrict2Total++;
        }

        if (d[i].Council_District__c == "3") {
            if (d[i].Status == "Closed") {
                councilDistrict3Closed++;
            }
            councilDistrict3Total++;
        }

        if (d[i].Council_District__c == "4") {
            if (d[i].Status == "Closed") {
                councilDistrict4Closed++;
            }
            councilDistrict4Total++;
        }

        if (d[i].Council_District__c == "5") {
            if (d[i].Status == "Closed") {
                councilDistrict5Closed++;
            }
            councilDistrict5Total++;
        }

        if (d[i].Council_District__c == "6") {
            if (d[i].Status == "Closed") {
                councilDistrict6Closed++;
            }
            councilDistrict6Total++;
        }

        if (d[i].Council_District__c == "7") {
            if (d[i].Status == "Closed") {
                councilDistrict7Closed++;
            }
            councilDistrict7Total++;
        }

        if (d[i].Council_District__c == "8") {
            if (d[i].Status == "Closed") {
                councilDistrict8Closed++;
            }
            councilDistrict8Total++;
        }

        if (d[i].Council_District__c == "9") {
            if (d[i].Status == "Closed") {
                councilDistrict9Closed++;
            }
            councilDistrict9Total++;
        }

        if (d[i].Council_District__c == "10") {
            if (d[i].Status == "Closed") {
                councilDistrict10Closed++;
            }
            councilDistrict10Total++;
        }

        if (d[i].Council_District__c == "11") {
            if (d[i].Status == "Closed") {
                councilDistrict11Closed++;
            }
            councilDistrict11Total++;
        }

        if (d[i].Council_District__c == "12") {
            if (d[i].Status == "Closed") {
                councilDistrict12Closed++;
            }
            councilDistrict12Total++;
        }

        if (d[i].Council_District__c == "13") {
            if (d[i].Status == "Closed") {
                councilDistrict13Closed++;
            }
            councilDistrict13Total++;
        }

        if (d[i].Council_District__c == "14") {
            if (d[i].Status == "Closed") {
                councilDistrict14Closed++;
            }
            councilDistrict14Total++;
        }
    }


    const data = [
        {
            District: '1', Closed: councilDistrict1Closed, Total: councilDistrict1Total,
        },
        {
            District: '2', Closed: councilDistrict2Closed, Total: councilDistrict2Total,
        },
        {
            District: '3', Closed: councilDistrict3Closed, Total: councilDistrict3Total,
        },
        {
            District: '4', Closed: councilDistrict4Closed, Total: councilDistrict4Total,
        },
        {
            District: '5', Closed: councilDistrict5Closed, Total: councilDistrict5Total,
        },
        {
            District: '6', Closed: councilDistrict6Closed, Total: councilDistrict6Total,
        },
        {
            District: '7', Closed: councilDistrict7Closed, Total: councilDistrict7Total,
        },
        {
            District: '8', Closed: councilDistrict8Closed, Total: councilDistrict8Total,
        },
        {
            District: '9', Closed: councilDistrict9Closed, Total: councilDistrict9Total,
        },
        {
            District: '10', Closed: councilDistrict10Closed, Total: councilDistrict10Total,
        },
        {
            District: '11', Closed: councilDistrict11Closed, Total: councilDistrict11Total,
        },
        {
            District: '12', Closed: councilDistrict12Closed, Total: councilDistrict12Total,
        },
        {
            District: '13', Closed: councilDistrict13Closed, Total: councilDistrict13Total,
        },
        {
            District: '14', Closed: councilDistrict14Closed, Total: councilDistrict14Total,
        },
    ];


    const title = {
        color: "black",
        padding: "20px",
        fontFamily: "Arial",
        position: 'absolute',
        left: "100px",
        top: "-30px",
        fontSize: "20px"
    };


    return (


        <ComposedChart
            width={500}
            height={400}
            data={data}
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

export default ClosedCompare;