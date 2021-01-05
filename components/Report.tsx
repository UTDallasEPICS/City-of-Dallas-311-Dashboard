import React from 'react'
import { Container, Row, Col, Image, Card, Table } from 'react-bootstrap';

type ReportProps = {
  data: Object[];
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

  totalSRsOpened() {
    return this.props.data?.length
  }

  totalCurrentlyOpen() {
    return 151;
  }

  totalOverdue() {
    return 151;
  }

  percentClosedOnTime() {
    return 10;
  }

  projectedSLA() {
    return 90;
  }

  performanceByDepartment() {
    // returns array of obj: dept name, currently open, overdue, percent on time, avg time to close, total open
  }
  topSRTypesTableRows() {
    const rows: Element[] = [];
    rows.push(<tr><td>A Type</td><td>A Department</td><td>50</td></tr>);
    rows.push(<tr><td>A Type</td><td>A Department</td><td>55</td></tr>);
    return rows;
  }
  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col sm={2} lg={2} md={2}><Image src="/placeholder_headshot.jpg" /></Col>
          <Col style={{ padding: "1" }}>
            <Row>
              <h1>Excellence in Service Performance Report</h1>
            </Row>
            <Row>
              <h3>Title</h3>
            </Row>
            <Row>
              <h3>Name</h3>
            </Row>
            <Row>
              <Col style={{ padding: "0" }}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Title>Total</Card.Title>
                  <Card.Body>{this.totalSRsOpened()}</Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0" }}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Title>Currently Open</Card.Title>
                  <Card.Body>{this.totalCurrentlyOpen()}</Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0" }}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Title>Overdue</Card.Title>
                  <Card.Body>{this.totalOverdue()}</Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0" }}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Title>Percent On Time</Card.Title>
                  <Card.Body>{this.percentClosedOnTime()}%</Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0" }}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Title>Projected SLA</Card.Title>
                  <Card.Body>{this.projectedSLA()}%</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm={2} lg={2} md={2}>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Image src="/311_logo.jpg" />
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <p>{this.date()}</p>
              </Col>
            </Row>
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
          <Col> Department Performance</Col>
          <Col>SR Input Method</Col>
        </Row>
      </Container>
    );
  }
}

export default Report;
