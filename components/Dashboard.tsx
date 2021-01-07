import { Map } from '../components/Map';
import { Tabs, Tab } from 'react-bootstrap';
import Report from '../components/Report';
import React, { useState } from 'react';
import { ServiceRequest } from '../components/types';



function DashboardTabs({ DashProps }: { DashProps: ServiceRequest[] }) {
    const [key, setKey] = useState('Main');
    return (
        <Tabs id='Tabs'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            style={{ gridArea: 'Tabs', position: 'absolute' }}>
            <Tab eventKey="Main" title="Map">
                <div>
                    <Map />
                </div>
            </Tab>
            <Tab eventKey='Graphs' title="Graphs">
                <div>

                </div>
            </Tab>
            <Tab eventKey="Report" title="Report">
                <Report data={DashProps} month="January" year="2019" />
            </Tab>
        </Tabs>
    )

}

export default DashboardTabs;