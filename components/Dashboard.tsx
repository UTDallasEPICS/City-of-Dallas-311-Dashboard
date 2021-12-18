import { Map } from '../components/Map';
import { Tabs, Tab } from 'react-bootstrap';
import Report from '../components/Report';
import React, { useState } from 'react';
import { ServiceRequest } from '../components/types';
import SpecificCompare from '../components/CouncilDistrictComparisonSpecific';
import ClosedCompare from '../components/CouncilDistrictComparisonClosedTotal';
import SRDistribution from "../components/SRDistribution";
import SROwner from '../components/SROwnerComparison';

function DashboardTabs({ DashProps }: { DashProps: ServiceRequest[] }) {
    const [key, setKey] = useState('Main');
    return (
        <Tabs id='Tabs'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            style={{ gridArea: 'Tabs', position: 'absolute' }}>
            <Tab eventKey="Main" title="Map">
                <div>
                    <br />
                    <br />
                    <Map />
                </div>
            </Tab>
            <Tab eventKey='Graphs' title="Graphs">
                <div style={{ gridTemplateAreas: "'SpecificCompare ClosedCompare''SRDistribution SROwner " }}>
                    <SpecificCompare serviceRequests={DashProps} />
                    <ClosedCompare serviceRequests={DashProps} />
                    <SRDistribution serviceRequests={DashProps} />
                    <SROwner serviceRequests={DashProps} />
                </div>
            </Tab>
            <Tab eventKey="Report" title="Report">
                <Report data={DashProps} month="January" year="2019" />
            </Tab>
        </Tabs>
    )

}

export default DashboardTabs;