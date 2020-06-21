import React, { Component } from 'react';
import { FiltersList } from './filtersList';
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';


export interface filterHubProps {
}

export interface filterHubState {
    filterTypes: {
        name: string,
        isToggleOn: boolean,
    }[]
    searchLocation: string,
    searchRequestNumber: string,
    wordsToSearch: string[],
    allOn: boolean,
}


class filterHub extends Component<filterHubProps, filterHubState> {
    constructor(props: filterHubProps) {
        super(props);
        this.state = {
            filterTypes: [{ name: "Air", isToggleOn: true }, { name: "Water", isToggleOn: true },
            { name: "Earth", isToggleOn: true }, { name: "Fire", isToggleOn: true }],
            searchLocation: '',
            searchRequestNumber: '',
            wordsToSearch: [],
            allOn: true
        };
        this.handleRequestNumberInput = this.handleRequestNumberInput.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.checkWhatIsSelected = this.checkWhatIsSelected.bind(this);
        this.searchEntries = this.searchEntries.bind(this);
    };

    handleLocationInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchLocation: e.target.value });
    };

    handleRequestNumberInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchRequestNumber: e.target.value });
    };

    handleClick = (i: number) => {
        this.setState(state => {
            let checkOn = 0;
            const filterType = state.filterTypes.map((newType, j) => {
                if (j === i) {
                    //When a button is clicked, it flips the boolean value
                    newType.isToggleOn = !newType.isToggleOn;
                    if (!newType.isToggleOn) { checkOn++; }
                    return newType;
                } else {
                    if (!newType.isToggleOn) { checkOn++; }
                    return newType;
                }
            });
            filterTypes: filterType;
            if (checkOn > 0) { allOn: false; }
            else { allOn: true; }
        }, this.checkWhatIsSelected);
        document.getElementsByClassName("boxBoys").checked = this.state.filterTypes[i].isToggleOn;
        document.getElementsByClassName("allSwitch").checked = this.state.allOn;
        console.log(this.state.wordsToSearch)
    };

    handleAllOn = (event: any) => {
        let filterTypes = this.state.filterTypes;
        filterTypes.forEach(filterType => filterType.isToggleOn = event.target.checked)
        this.setState({ filterTypes: filterTypes })
        console.log(this.state.filterTypes)
        this.checkWhatIsSelected;
    }

    checkWhatIsSelected() {
        //string to hold words to update state with
        let listOfWordsToSearch: string[] = [];
        //iterates through the word objects to see if they have been selected 
        for (let i = 0; i < this.state.filterTypes.length; i++) {
            //if the object has value true, take the add just the string to the array made previously
            if (this.state.filterTypes[i].isToggleOn === true) { listOfWordsToSearch.push(this.state.filterTypes[i].name) };
        };
        //set words to search to this new list of words
        this.setState({
            wordsToSearch: listOfWordsToSearch
        });
        console.log(this.state.wordsToSearch);
    };

    searchEntries() {

    };


    render() {
        //I can filter results to print out in here thru
        // making a new array .filter 
        //return .tolowercase .include. (Whatever typed) .toLower 
        return (
            <div style={{ width: 203, border: 'solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <SeacrhLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <input type="checkbox" className="allSwitch" color="primary" defaultChecked={this.state.allOn} onClick={this.handleAllOn} />
                <label> Select All </label>
                <FiltersList filters={this.state.filterTypes} handleIn={this.handleClick} />
            </div>
        );
    }
}

export default filterHub;