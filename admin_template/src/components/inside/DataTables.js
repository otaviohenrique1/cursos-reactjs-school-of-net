import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from 'reactstrap';

import BootstrapDataTables from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const columns = [
  {
    dataField: 'id',
    text: 'ID'
  },
  {
    dataField: 'title',
    text: 'Title'
  },
  {
    dataField: 'price',
    text: 'Price'
  }
];

export default function DataTables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataset = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 15 },
      { id: 3, title: 'Product 3', price: 20 },
      { id: 4, title: 'Product 4', price: 25 },
      { id: 5, title: 'Product 5', price: 30 },
      { id: 6, title: 'Product 6', price: 35 },
      { id: 7, title: 'Product 7', price: 40 },
      { id: 8, title: 'Product 8', price: 45 },
      { id: 9, title: 'Product 9', price: 50 },
      { id: 10, title: 'Product 10', price: 55 },
      { id: 11, title: 'Product 11', price: 60 },
      { id: 12, title: 'Product 12', price: 65 },
      { id: 13, title: 'Product 13', price: 70 },
      { id: 14, title: 'Product 14', price: 75 },
      { id: 15, title: 'Product 15', price: 80 },
      { id: 16, title: 'Product 16', price: 85 },
      { id: 17, title: 'Product 17', price: 90 },
      { id: 18, title: 'Product 18', price: 95 },
      { id: 19, title: 'Product 19', price: 100 },
      { id: 20, title: 'Product 20', price: 105 },
      { id: 21, title: 'Product 21', price: 110 },
      { id: 22, title: 'Product 22', price: 115 }
    ];
    setData(dataset);
  }, []);
  
  return (
      <div>
          <Row>
            <Col xs="12" sm="12" md="12">
              <Card>
                <CardHeader>
                  <h4>Data Tables</h4>
                </CardHeader>
                <CardBody>
                  <BootstrapDataTables
                    keyField='id'
                    data={data}
                    columns={columns}
                    hover
                    condensed
                    bordered={false}
                    pagination={ paginationFactory() }
                  />
                </CardBody>
                <CardFooter>
                  Footer
                </CardFooter>
              </Card>
            </Col>
          </Row>
      </div>
  );
}
