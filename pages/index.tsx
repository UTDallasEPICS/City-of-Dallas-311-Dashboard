<<<<<<< HEAD
import FilterMenu from "../components/FilterMenu";
import { Map } from '../components/Map';
import React, { Component } from 'react';
import PieG from "../components/pie_chart";
import Navibar from '../components/Navibar';
import Vert from "../components/vertical_bar";
import Horiz from "../components/horizontal_bar";

class index extends Component {
    render() {
        return (
            <div>
                <Navibar />
                <div>
                    <p />
                </div>
                <div className="311-dashboard-container" style={{
                    display: 'grid', gridTemplateAreas: '"FilterMenu Map PieG"'
                }}>
                    < FilterMenu />
                    <Map />
                    <PieG />
                </div>
                <div className="311-dashboard-container-2" style={{ display: 'grid', gridTemplateAreas: '"Vert Horiz"' }}>
                    <Vert />
                    <Horiz />
                </div>

            </div>
        )
    }
}

export default index;


=======
import FilterHub from "../components/FilterHub";
import React, { Component } from 'react';



class index extends Component {
    render() {
        return (
            <FilterHub />
        )
    }
}

export default index;
>>>>>>> user-input
