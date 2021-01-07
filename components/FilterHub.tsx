import Filter from "../components/Filter";
import { SearchLocationBox, SearchRequestNumberBox } from './SearchBox';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DATA from '../components/DummyData.json';


const data = DATA; //pulled from DummyData; make into 


function checkNull(item: any) {
    if (item.title === null) {
        return false;
    }
    return true;
}

//List of department variables
//Generates by pulling from the data
let Departments = data.map(item => ({ title: item.Service_Department__c, content: [item.Service_Department_Code__c, item.Service_Department__c] }));
//Hide null values
Departments = Departments.filter(item => (checkNull(item)));
//Cuts out duplicates      TODO OPTIMIZE THIS ALGO
for (let i = 0; i < Departments.length; i++) {
    for (let j = Departments.length - 1; j > 0; j--) {
        if (Departments[i].title === Departments[j].title && i != j) {
            Departments.splice(j, 1);
        }
    }
}
//TODO sort alphabetically via title
//line below adds all button to front
Departments.unshift({ title: "All", content: ["All"] });

let Requests = data.map(item => ({ title: item.SR_Owner__c, content: [item.SR_Owner__c] }));
//Hide null values
Requests = Requests.filter(item => (checkNull(item)));
//Cuts out duplicates      TODO OPTIMIZE THIS ALGO
for (let i = 0; i < Requests.length; i++) {
    for (let j = Requests.length - 1; j > 0; j--) {
        if (Requests[i].title === Requests[j].title && i != j) {
            Requests.splice(j, 1);
        }
    }
}
//TODO sort alphabetically via title
//line below adds all button to front
Requests.unshift({ title: "All", content: ["All"] });


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

        //If the user never touches search bar, it classifies as undefined
        if (searchLocation == undefined) {
            searchLocation = "";
        }
        if (searchRequestNumber == undefined) {
            searchRequestNumber = "";
        }

        function isItGood(obj: any) {
            //returns true after making it thru all checks
            if ((district == 0 || district == parseInt(obj.Council_District__c, 10)) && //Filters district
                (searchLocation == "" || obj.Incap311__Address__c.includes(searchLocation)) && //Filters Location
                (searchRequestNumber == "" || obj.Incap311__Service_Request_Number__c.includes(searchRequestNumber)) && //Filters request #
                (requestTypeValue == "All" || (obj.Service_Department__c == requestTypeValue && obj.Service_Department__c !== null)) &&  //Request type
                (departmentValue == "All" || (obj.Service_Department__c == requestTypeValue && obj.Service_Department__c !== null)) //Department filter
            ) {
                return true;
            }
            //after 1st false it exits and returns false
            return false;
        }
        //create new array to send desired results to so we don't have to repeatedly call the function and can just filter data on hand
        //Begin the filtering part here as well
        let filteredData = data.filter((obj: any) =>
            isItGood(obj)
        )

        console.log(filteredData);
        console.log(Object.keys(filteredData[0]));
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