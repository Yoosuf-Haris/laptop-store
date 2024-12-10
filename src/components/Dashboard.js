import React from 'react';
import { Container, Row, Col, Card, Table, Nav } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Custom CSS for the Dashboard

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-white">
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
            <Nav.Link href="#" className="text-white">Layouts</Nav.Link>
            <Nav.Link href="#" className="text-white">Pages</Nav.Link>
            <Nav.Link href="#" className="text-white">Charts</Nav.Link>
            <Nav.Link href="#" className="text-white">Tables</Nav.Link>
          </Nav>
        </Col>
        <Col md={10}>
          <h1 className="my-4">Dashboard</h1>
          <Row>
            <Col md={3}>
              <Card className="mb-3 text-white bg-primary">
                <Card.Body>
                  <Card.Title>Primary Card</Card.Title>
                  <Card.Text>View Details</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-white bg-warning">
                <Card.Body>
                  <Card.Title>Warning Card</Card.Title>
                  <Card.Text>View Details</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-white bg-success">
                <Card.Body>
                  <Card.Title>Success Card</Card.Title>
                  <Card.Text>View Details</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-white bg-danger">
                <Card.Body>
                  <Card.Title>Danger Card</Card.Title>
                  <Card.Text>View Details</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Area Chart Example</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Bar Chart Example</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>DataTable Example</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>

                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Airi Satou</td>
                    <td>Delivery Boy</td>

                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr>
                  <tr>
                    <td>Angelica Ramos</td>
                    <td>Repair Services</td>

                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Maintenence</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
