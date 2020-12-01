import React from 'react'
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';
import './Dropper'
import Dropper from './Dropper';

export interface FilterMenuProps {

}

export interface FilterMenuState {
    serviceRequests: {
        requestNum: string,
        address: string,
        cause: string,
    }[],
    searchLocation: string,
    searchRequestNumber: string,
    searchOptions: string[],
    wordsToSearch: string[],
    showSearch: boolean,
    showDistrict: boolean
}

class FilterMenu extends React.Component<FilterMenuProps, FilterMenuState> {
    constructor(props: FilterMenuProps) {
        super(props);
        this.state = {
            serviceRequests: [], //this bad boy needs to get the data from John
            searchLocation: '',
            searchRequestNumber: '',
            searchOptions: ["Animal Control", "Graffiti", "Health & Sanitation", "Historic Preservation", "Information",
                "Parks", "Property Maintenance", "Scooters", "Solid Waste Services", "Streets & Infrastructure", "Traffic Signals", "Other"],
            wordsToSearch: ["Animal Control", "Graffiti", "Health & Sanitation", "Historic Preservation", "Information",
                "Parks", "Property Maintenance", "Scooters", "Solid Waste Services", "Streets & Infrastructure", "Traffic Signals", "Other"],
            showDistrict: false,
            showSearch: true,
        }
        this.handleRequestNumberInput = this.handleRequestNumberInput.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleLocationInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchLocation: e.target.value });
    };

    handleRequestNumberInput = (e: any) => {
        console.log(e.target.value);
        this.setState({ searchRequestNumber: e.target.value });
    };

    handleClick = (itemName: string) => {
        let isOn = document.getElementById(itemName) as HTMLInputElement;
        if (isOn === null) {
            alert('Error; Doc null')
        } else {
            let confirmOn = isOn.checked;
            if (confirmOn && !this.state.wordsToSearch.includes(itemName)) {
                let dupli = this.state.wordsToSearch;
                dupli.push(itemName);
                this.setState({
                    wordsToSearch: dupli
                }, () => this.bufferHandleClick())
            } else if (!confirmOn) {
                let dupli = this.state.wordsToSearch.filter(word => word != itemName);
                dupli = dupli.filter(word => word != itemName);
                this.setState({
                    wordsToSearch: dupli
                }, () => this.bufferHandleClick())
            }
        }
    };

    bufferHandleClick = () => {
        //Use this to change the status of the ALL button
        let allSelected = true;
        const setAllValue = document.getElementById("AllButton") as HTMLInputElement;
        this.state.searchOptions.forEach(val => {
            const check = document.getElementById(val) as HTMLInputElement;
            if (!check.checked) {
                setAllValue.checked = false;
                allSelected = false;
            }
        })
        if (allSelected) {
            setAllValue.checked = true;
        }
    }

    handleAllClick = () => {
        let isAll = document.getElementById("AllButton") as HTMLInputElement;
        if (isAll === null) {
            alert("Error with all buttoon")
        } else {
            let confirmAll = isAll.checked;
            if (confirmAll) {
                for (let i = 0; i < this.state.searchOptions.length; i++) {
                    const setTrue = document.getElementById(this.state.searchOptions[i]) as HTMLInputElement;
                    if (!setTrue.checked) setTrue.click();
                }
            } else {
                for (let i = 0; i < this.state.wordsToSearch.length; i++) {
                    const setFalse = document.getElementById(this.state.searchOptions[i]) as HTMLInputElement;
                    if (setFalse.checked) setFalse.click();
                }
            }
        }
    }

    getSlider = () => {
        const val = document.getElementById("districtSlider") as HTMLInputElement;
        const value = val.value;
        console.log(value);
    }


    check(value: any) {
        let allLower = this.state.wordsToSearch.map(word => word.toLowerCase());
        if (allLower.includes(value.toLowerCase)) return value;
        return false;
    }

    search = () => {
        //Create Array Declaration to hold the data
        //Filter the array through the cause value with the values from wordsToSearch
        if (this.state.searchRequestNumber == "" && this.state.searchLocation == "") {
            let valuesToReturn = this.state.serviceRequests.filter(word => this.check(word.cause))
            return valuesToReturn;
        }
        //Filter that array through the Request Number value if something is inside
        else if (this.state.searchRequestNumber != "" && this.state.searchLocation == "") {
            let valuesToReturn = this.state.serviceRequests.filter(word => word.requestNum.includes(this.state.searchRequestNumber)
                && this.check(word.cause))
            return valuesToReturn;
        }
        //Filter that array through location value if something has been provided
        else if (this.state.searchLocation != "" && this.state.searchRequestNumber == "") {
            let valuesToReturn = this.state.serviceRequests.filter(word => word.address.includes(this.state.searchLocation)
                && this.check(word.cause))
            return valuesToReturn;
        }
        else {
            let valuesToReturn = this.state.serviceRequests.filter(word => word.requestNum.includes(this.state.searchRequestNumber)
                && word.address.includes(this.state.searchLocation) && this.check(word.cause))
            return valuesToReturn;
        }
    }

    displaySearchMenu = (item: JSX.Element[]) => {
        if (this.state.showSearch == true) {

        }
    }

    render() {
        const printTypes = this.state.searchOptions.map((filterType, index) => {
            return (
                <p key={index} style={{ width: 200, textAlign: 'left' }}>
                    <input className="boxBoys" onClick={() => this.handleClick(filterType)}
                        type="checkbox" color="primary" defaultChecked={true} title={filterType} id={filterType} />
                    <label>
                        {filterType}
                    </label>
                </p>
            );
        })
        return (
            <div style={{ width: 203, border: 'solid', textAlign: 'center' }}>
                <h1>Search</h1>
                <SeacrhLocationBox handleInput={this.handleLocationInput} />
                <SearchRequestNumberBox handleInput={this.handleRequestNumberInput} />
                <input type="CheckBox" id="AllButton" defaultChecked={true} onInput={this.getSlider} />
                <label>Select All</label>

                <button type="button" onClick={this.search}>Search</button>
            </div>
        );
    }
}

export default FilterMenu;