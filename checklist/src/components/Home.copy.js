import React, { Component } from 'react';
import {
    Table,
    Badge,
    Col,
    Input,
    FormGroup,
    Label,
    Row
} from "reactstrap";
import { Link } from "react-router-dom";
import Counter from "./Counter";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    // Quando o componente estiver montado
    componentDidMount() {
        const data = Array.isArray(JSON.parse(localStorage.getItem('data'))) ? JSON.parse(localStorage.getItem('data')) : []; // checa o tipo do data
        this.setState({ data });
    }
    
    // Altera o item do banco de dados
    onCheckedItem = (item) => {
        const { data } = this.state;
        const index = data.indexOf(item);
        if (index >= 0) {
            data[index] = { ...item, check: !item.check };
            // console.log(JSON.parse(localStorage.getItem('data')));
            localStorage.setItem('data', JSON.stringify(data));
            this.setState({ data });
        }
    }
    
    render() {
        const { data } = this.state;

        return (
            <div>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3">Checklist</h1>
                        {/* <Counter length={data.length}/> */}
                        <Counter data={data}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/add" className="btn btn-primary mb-4 mt-4">New Item</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Check</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="pretty p-icon p-round">
                                                <input type="checkbox" name="check" id="check" checked={item.check} onChange={() => this.onCheckedItem(item)}/>{' '}
                                                <div className="state">
                                                    <i className="icon mdi mdi-check"></i>
                                                    <label htmlFor=""></label>
                                                </div>
                                            </div>
                                            {/* <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" name="check" id="check" checked={item.check} onChange={() => this.onCheckedItem(item)}/>{' '}
                                                </Label>
                                            </FormGroup> */}
                                        </td>
                                        <td>{item.name}</td>
                                        <td>
                                            {item.check === true ? <Badge color="success">True</Badge> : <Badge color="danger">False</Badge>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}
