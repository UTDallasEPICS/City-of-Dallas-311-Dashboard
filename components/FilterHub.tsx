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

var searchLocation: string;
var searchRequestNumber: string;


class FilterHub extends Component {

    getDepartmentValue = () => {
        //TODO
        //return selection variable in filter titled departments
    };

    getTypeValue = () => {
        //TODO
        //return selection variable in filter titled Request Types
    };

    getDistrictValue = () => {
        //TODO
        //get district value from form for districts (implemnented as 'html select' or 'slider' (if slider not default))
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
        console.log(searchLocation);
        console.log(searchRequestNumber);
    }

    render() {
        return (
            <div style={{ width: 250, border: 'solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <br></br>
                <br></br>
                <SearchLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <Filter title="Departments" items={Departments} />
                <Filter title="Request Types" items={Requests} />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}

export default FilterHub;