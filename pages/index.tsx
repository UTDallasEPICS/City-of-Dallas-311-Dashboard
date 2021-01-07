import FilterHub from "../components/FilterHub";
import React, { Component } from 'react';
import Navibar from '../components/Navibar';
import DashboardTabs from '../components/Dashboard'

class index extends Component {
    state = { selectedValues: undefined };

    getData = (item: any) => {
        this.setState({ selectedValues: item });
        console.log(this.state.selectedValues);
    };


    render() {
        return (
            <div>
                <Navibar />
                <div>
                    <p />
                </div>
                <div className="311-dashboard-container" style={{
                    display: 'grid', gridTemplateAreas: '"FilterHub Tabs Tabs Tabs"'
                }}>
                    <FilterHub onFilterHub={this.getData} />
                    <DashboardTabs />
                </div>
            </div>
        )
    }
}

export default index;