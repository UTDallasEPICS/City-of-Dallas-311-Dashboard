import Vert from "../components/vertical_bar";
import Horiz from "../components/horizontal_bar";
import PieG from "../components/pie_chart";
import { Map } from '../components/Map';
import { Tabs, Tab } from 'react-bootstrap';
import React, { useState } from 'react';


function DashboardTabs() {
    const [key, setKey] = useState('Main');

    return (
        <Tabs id='Tabs'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            style={{ gridArea: 'Tabs' }}>
            <Tab eventKey="Main" title="Map">
                <div>
                    <Map />
                    <PieG />
                </div>
            </Tab>
            <Tab eventKey='Other' title="Other">
                <div>
                    <Vert />
                    <Horiz />
                </div>
            </Tab>
        </Tabs>
    )

}

export default DashboardTabs;