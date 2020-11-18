import React, { Component } from 'react';
import styles from './Dropdown.module.css';
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';

export interface FilterProps { }
export interface FilterState { }




class Filter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
    }

    handleLocationInput() {
    }

    handleRequestNumberInput() {
    }

    search() {

    }

    render() {
        return (
            <div style={{ width: 203, border: 'solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <SeacrhLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />

                <label>Select All</label>

                <input type='range' id="districtSlider" min="0" max="14" step="1" defaultValue="0" />
                <button type="button" onClick={this.search}>Search</button>
            </div>
        );
    }
}
export default Filter;