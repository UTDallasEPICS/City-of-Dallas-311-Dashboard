import Filter from "../components/Filter";
import { SearchLocationBox, SearchRequestNumberBox } from './SearchBox';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Format for items
{
    title: string               name of button
    content: [string]           keywords to search for(in Departments include acronym and other shorthand used in salesforce)
                                                      (in Requests further investigation is needed )
}
*/
const Departments = [
    {
        title: 'All',
        content: ['All']
    },
    {
        title: 'Fire Department',
        content: ['Fire Department', 'DFR'],
    },
    {
        title: 'Code Compliance',
        content: ['Code Compliance', 'CCS']
    }
];
const Requests = [
    {
        title: 'All',
        content: ['All'],

    },
    {
        title: 'Graffiti',
        content: ['Graffiti']
    },

];
/*NOTE 
  there might be a better way to do this. You could use a loop to go through the data given from the API to generate the list of
  search types/departments dynamically, rather than by hand. Todo do this requires using the fetch API and connecting it to API made spring20.
  Then add them into a list and check for duplicates, afterwards feed them into the items depicted above. Previously designed code 
  should do the rest if in correct format.
*/

let searchLocation: string;
let searchRequestNumber: string;
let departmentValue: string;
let requestTypeValue: string;
let district: number;


class FilterHub extends Component {

    getDepartmentValue = () => {
        let depValue = document.getElementsByName('Departments');
        var i: number;
        for (i = 0; i < depValue.length; i++) {
            if (depValue[i].checked) { //checked does exist, its just buggin
                console.log(depValue[i].id);
                return depValue[i].id;
            }
        }
        return 'All';

    };//Get department from filter function

    getTypeValue = () => {
        let reqValue = document.getElementsByName('Request Types');
        var i: number;
        for (i = 0; i < reqValue.length; i++) {
            if (reqValue[i].checked) { //checked does exist, its just buggin
                console.log(reqValue[i].id);
                return reqValue[i].id;
            }
        }
        return 'All';
    };//Get Type from filter function

    getDistrictValue = () => {
        //get district value from form for districts (implemnented as 'html select')
        let dVal = document.getElementById('districtPick') as HTMLInputElement;
        if (dVal.value == 'All') {
            return 0;
        }
        return parseInt(dVal.value, 10);
    };

    handleLocationInput = (e: any) => {
        console.log(e.target.value);
        searchLocation = e.target.value
    };//Set location

    handleRequestNumberInput = (e: any) => {
        console.log(e.target.value);
        searchRequestNumber = e.target.value;
    };//Set Request Number

    search = () => {
        //TODO 
        departmentValue = this.getDepartmentValue(); //
        requestTypeValue = this.getTypeValue(); //
        district = this.getDistrictValue(); //0 for all, 1-14 are district numbers

        console.log('Search Location: ' + searchLocation);
        console.log('Search Number: ' + searchRequestNumber);
        console.log('Search Department: ' + departmentValue);
        console.log('Search Request Type: ' + requestTypeValue);
        console.log('Search District: ' + district);
        if (searchLocation == undefined) {
            searchLocation = "";
            console.log('Updated location: ' + searchLocation);
        }
        if (searchRequestNumber == undefined) {
            searchRequestNumber = "";
            console.log('updated Number: ' + searchRequestNumber);
        }

    }

    render() {
        return (
            <div style={{ width: 250, border: '1px solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <br></br>
                <br></br>
                <SearchLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <div style={{ margin: 10 }}>
                    <Filter title="Departments" items={Departments} />
                </div>
                <div style={{ margin: 10 }}>
                    <Filter title="Request Types" items={Requests} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <label>District  <select className='districtPick' id='districtPick'>
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                    </select>

                    </label>
                </div>
                <br></br>
                <button onClick={this.search}>Search</button>
            </div >
        )
    }
}

export default FilterHub;