import FilterMenu from "../components/FilterMenu";
import { Map } from '../components/Map';
import React, { Component } from 'react';
import Navibar from '../components/Navibar';

class index extends Component {
    render() {
        return (
            <div>
                <Navibar />
                <div>
                    <p />
                </div>
                <div className="311-dashboard-container" style={{
                    display: 'grid', gridTemplateAreas: '"FilterMenu Map Map Map"'
                }}>
                    < FilterMenu />
                    <Map />
                </div>
            </div>
        )
    }
}

export default index;


