import Filter from "../components/Filter";
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Departments = [
    "Fire", "water"
];

const Types = [
    "All",
];

var searchLocation;
var searchRequestNumber;


class FilterHub extends Component {

    getDepartmentValue = () => {

    };

    getTypeValue = () => {

    };

    getDistrictValue = () => {

    };

    handleLocationInput = (e: any) => {
        console.log(e.target.value);
        searchLocation = e.target.value
    };

    handleRequestNumberInput = (e: any) => {
        console.log(e.target.value);
        searchRequestNumber = e.target.value;
    };


    render() {
        return (
            <div style={{ width: 250, border: 'solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <br></br>
                <SeacrhLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <Filter title="Departments" items={Departments} />
            </div>
        )
    }
}

export default FilterHub;