import React, { Component } from 'react';
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';
import "./DropDownCases"

export interface FilterProps { }

export interface FilterState {
    toSend: {
        requestNum: string,
        address: string,
        cause: string,
        cordinate: {
            lat: number,
            lon: number
        }
    }[],
    searchLocation: string,
    searchRequestNumber: string,
    departmentSearch: string,
    districtSearch: string,
    requestType: string
}




class Filter extends Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        this.state = {
            toSend: [],
            searchLocation: '',
            searchRequestNumber: '',
            departmentSearch: "",
            districtSearch: "",
            requestType: ""
        }
    }

    handleLocationInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchLocation: e.target.value });
    };

    handleRequestNumberInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchRequestNumber: e.target.value });
    };

    handleDistrict = () => {
        console.log();
    };


    search() {

    }

    render() {
        return (
            <div style={{ width: 203, border: 'solid', textAlign: 'center', fontFamily: 'Lato' }}>
                <h1>Search</h1>
                <SeacrhLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <div style={{ fontSize: "20px" }}>
                    <label>Request Types </label>
                    <select name="reqTypes" id="reqTypes">
                        <option value="" disabled selected>Select your option</option>
                        <option value="all">All</option>
                        <option value="water">Water</option>
                        <option value="earth">Earth</option>
                        <option value="fire">Fire</option>
                        <option value="air">Air</option>
                    </select>
                </div>
                <div style={{ fontSize: "20px" }}>
                    <label>Department </label>
                    <select name="depTypes" id="depTypes" className="select-css">
                        <option value="" disabled selected>Select your option</option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <input type='range' id="districtSlider" min="0" max="14" step="1" defaultValue="0" />
                <button type="button" onClick={this.search}>Search</button>
            </div>
        );
    }
}
export default Filter;