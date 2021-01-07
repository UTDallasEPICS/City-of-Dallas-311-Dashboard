import React from 'react'
import { Container, Row, Col, Image, Card, Table } from 'react-bootstrap';
import {ServiceRequest} from "./types";

type ReportProps = {
  data: ServiceRequest[];
  month: string;
  year: string;
}

class Report extends React.Component<ReportProps> {
  constructor(props: ReportProps) {
    super(props);
  };

  date() {
    return `${this.props.month}, ${this.props.year}`;
  }

  totalSRsOpened(data: ServiceRequest[]) {
    return data?.length
  }

  totalCurrentlyOpen(data: ServiceRequest[]) {
    return data?.filter((sr: ServiceRequest) => sr.Status != "Closed").length;
  }

  totalOverdue(data: ServiceRequest[]) {
    return 151;
  }

  percentClosedOnTime(data: ServiceRequest[]) {
    return 10;
  }

  projectedSLA(data: ServiceRequest[]) {
    return 90;
  }

  avgDaysToClose(data: ServiceRequest[]) {
    return 5;
  }

  calls() {
    return 5;
  }

  mobile() {
    return 5;
  }

  web() {
    return 5;
  }

  proactive() {
    return 5;
  }

  performanceByDepartment() {
    const processed = {}
    for (const sr of this.props.data) {
      const target = sr.Service_Department_Code__c || "N/A"
      if (!processed[target]){
        processed[target] = []
      }
      processed[target].push(sr)
    }
    
    return Object.keys(processed).map(k => 
      <tr>
        <td>{k}</td>
        <td>{this.totalCurrentlyOpen(processed[k])}</td>
        <td>{this.totalOverdue(processed[k])}</td>
        <td>{this.percentClosedOnTime(processed[k])}</td>
        <td>{this.avgDaysToClose(processed[k])}</td>
        <td>{this.totalSRsOpened(processed[k])}</td>
      </tr>
    )
  }

  topSRTypesTableRows() {
    const processed = {}
    for (const sr of this.props.data) {
      if (!processed[sr.Incap311__Service_Type_Version_Code__c]){
        processed[sr.Incap311__Service_Type_Version_Code__c] = {code: sr.Service_Department_Code__c, count:0}
      }
      processed[sr.Incap311__Service_Type_Version_Code__c].count++
    }
    return Object.keys(processed).map(k => <tr><td>{k}</td><td>{processed[k].code || "None"}</td><td>{processed[k].count}</td></tr>)
  }

  render = () => {
      return (
        <Container>
          <Row>
            <Col sm={2} lg={2} md={2}><Image src="/placeholder_headshot.jpg"/></Col>
              <Col>
                <Row>
                  <h1>Excellence in Service Performance Report</h1>
                </Row>
                <Row>
                  <h3>Title</h3>
                </Row>
                <Row>
                  <h3>Name</h3>
                </Row>
              </Col>
              <Col sm={2} lg={2} md={2}>
                <Row>
                  <Col style={{textAlign:"center"}}>
                    <Image src="/311_logo.jpg" width="150px"/>
                  </Col>
                </Row>
                <Row>
                  <Col style={{textAlign:"center"}}>
                    <p>{this.date()}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col style={{padding:"0"}}>
                <Card style={{textAlign:"center"}}>
                  <Card.Title>Total</Card.Title>
                  <Card.Body>{this.totalSRsOpened(this.props.data)}</Card.Body>
                </Card>
              </Col>
              <Col style={{padding:"0"}}>
                <Card style={{textAlign:"center"}}>
                  <Card.Title>Currently Open</Card.Title>
                  <Card.Body>{this.totalCurrentlyOpen(this.props.data)}</Card.Body>
                </Card>
              </Col>
              <Col style={{padding:"0"}}>
                <Card style={{textAlign:"center"}}>
                  <Card.Title>Overdue</Card.Title>
                  <Card.Body>{this.totalOverdue(this.props.data)}</Card.Body>
                </Card>
              </Col>
              <Col style={{padding:"0"}}>
                <Card style={{textAlign:"center"}}>
                  <Card.Title>Percent On Time</Card.Title>
                  <Card.Body>{this.percentClosedOnTime(this.props.data)}%</Card.Body>
                </Card>
              </Col>
              <Col style={{padding:"0"}}>
                <Card style={{textAlign:"center"}}>
                  <Card.Title>Projected SLA</Card.Title>
                  <Card.Body>{this.projectedSLA(this.props.data)}%</Card.Body>
                </Card>
              </Col>
            </Row>
          <Row>
            <Col>Graph 1</Col>
            <Col>
              <h2>Top SR Types {this.date()}</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>SR Type</th>
                    <th>Department</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {this.topSRTypesTableRows()}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>Graph 3</Col>
            <Col>Graph 4</Col>
          </Row>
          <Row>
            <Col> 
              <h2>Department Performance </h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Dept.</th>
                    <th>Currently Open</th>
                    <th>Overdue</th>
                    <th>% on Time</th>
                    <th>Avg Days to Close</th>
                    <th>Total Open</th>
                  </tr>
                </thead>
                <tbody>
                  {this.performanceByDepartment()}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Row>
              <h2>SR Input Method</h2>
              </Row>
              <Row>
                <Col style={{padding:"0"}}>
                  <Card style={{textAlign:"center"}}>
                    <Card.Title>Calls</Card.Title>
                    <Card.Body>{this.calls()}</Card.Body>
                  </Card>
                </Col>
                <Col style={{padding:"0"}}>
                  <Card style={{textAlign:"center"}}>
                    <Card.Title>Web</Card.Title>
                    <Card.Body>{this.web()}</Card.Body>
                  </Card>
                </Col>
                <Col style={{padding:"0"}}>
                  <Card style={{textAlign:"center"}}>
                    <Card.Title>Mobile</Card.Title>
                    <Card.Body>{this.mobile()}</Card.Body>
                  </Card>
                </Col>
                <Col style={{padding:"0"}}>
                  <Card style={{textAlign:"center"}}>
                    <Card.Title>Proactive</Card.Title>
                    <Card.Body>{this.proactive()}</Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
  }
}

export default Report;
