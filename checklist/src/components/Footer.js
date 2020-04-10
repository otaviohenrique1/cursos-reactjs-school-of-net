import React, { Component } from 'react';
import { Col } from "reactstrap";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Col className="text-center">Copyright School of net</Col>
        );
    }
}
