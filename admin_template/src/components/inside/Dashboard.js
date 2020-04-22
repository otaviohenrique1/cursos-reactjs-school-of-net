import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

export default function Dashboard() {
  return (
      <div>
          <Row>
            <Col xs="12" sm="6" md="6">
              <Card>
                <CardHeader>
                  <h4>Dashboard</h4>
                </CardHeader>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
  );
}
