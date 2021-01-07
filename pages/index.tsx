import FilterHub from "../components/FilterHub";
import React, { Component } from 'react';
import Navibar from '../components/Navibar';
<<<<<<< HEAD
import DashboardTabs from '../components/Dashboard'

=======
import Vert from "../components/vertical_bar";
import Horiz from "../components/horizontal_bar";
import Report from "../components/Report";
>>>>>>> ec1110c... First draft of reports page
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
<<<<<<< HEAD
                    <FilterHub onFilterHub={this.getData} />
                    <DashboardTabs />
=======
                    <FilterHub />
                    <Map />
                    <PieG />
                </div>
                <div className="311-dashboard-container-2" style={{ display: 'grid', gridTemplateAreas: '"Vert Horiz"' }}>
                    <Vert />
                    <Horiz />
                </div>
                <div style={{marginTop: "25px"}}>
                  <Report year="2020" month="August" data={[{}]}></Report>
                </div>

>>>>>>> ec1110c... First draft of reports page
                </div>
            </div>
        )
    }
}

export default index;