import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import { Bar, Pie } from "react-chartjs-2";

const dataBar = {
  labels: ['Item 1','Item 2','Item 3','Item 4','Item 5'],
  datasets: [
    {
      label: 'First',
      backgroundColor: '#ffffff',
      borderColor: '#cccccc',
      borderWidth: 1,
      data: [10,20,30,70,80]
    }
  ]
};

const dataPie = {
  labels: ['Item 1','Item 2','Item 3'],
  datasets: [
    {
      data: [70,40,20],
      backgroundColor: [
        '#4040b2',
        '#f05928',
        '#eb3f67'
      ]
    }
  ]
};

export default function Charts() {
  return (
      <div>
          <Row>
            <Col xs="12" sm="6" md="6">
              <Card>
                <CardHeader>
                  <h4>Charts Bar</h4>
                </CardHeader>
                <CardBody>
                  <Bar data={dataBar} width={100} height={80} />
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="6">
              <Card>
                <CardHeader>
                  <h4>Charts Pie</h4>
                </CardHeader>
                <CardBody>
                  <Pie data={dataPie} width={100} height={80} />
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
  );
}
