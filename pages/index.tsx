import FilterHub from "../components/FilterHub";
import React, { Component } from 'react';
import Navibar from '../components/Navibar';
import DashboardTabs from '../components/Dashboard'
import { ServiceRequest } from '../components/types';


type IndexProps = {
    ServiceRequests: ServiceRequest[];
}


class index extends Component<IndexProps> {
    constructor(props: IndexProps) {
        super(props);

    };

    state = { selectedValues: this.props.ServiceRequests };

    getData = (item: any) => {
        this.setState({ selectedValues: item }, () => {

        })
    };


    render() {
        return (
            <div>
                <Navibar />
                <br />
                <div className="311-dashboard-container" style={{
                    display: 'grid', gridTemplateAreas: '"FilterHub Tabs Tabs Tabs"'
                }}>
                    <FilterHub onFilterHub={this.getData} />
                    <DashboardTabs DashProps={this.state.selectedValues} />
                </div>
            </div>
        )
    }
}

export default index;