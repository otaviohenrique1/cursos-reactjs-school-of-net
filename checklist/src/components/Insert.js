import React, { Component } from 'react';
import {
    Form,
    Button,
    Label,
    Input,
    FormGroup,
    Card,
    CardBody,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            check: false,
            data: []
        };
    }

    // Quando o componente estiver montado
    componentDidMount() {
        const data = Array.isArray(JSON.parse(localStorage.getItem('data'))) ? JSON.parse(localStorage.getItem('data')) : []; // checa o tipo do data
        this.setState({ data });
    };
    
    _generateRandomId = () => (Math.random.toString(24).substr(2, 10));

    onChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked :target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
    handleStorage = async () => {
        const { data, name, check } = this.state;
        const id = this._generateRandomId();
        const arr = data;
        arr.push({ id, name, check });
        await this.setState({
            data: arr
        });
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/');
    }

    render() {
        const { name, check } = this.state;

        return (
            <div>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3">Add item</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Name:</Label>
                                        <Input type="text" value={name} onChange={this.onChange} name="name" id="name" placeholder="Insert item name here"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="pretty p-icon p-round">
                                            <input type="checkbox" name="check" onChange={this.onChange}  id="check" checked={check}/>{' '}
                                            <div className="state p-success">
                                                <i className="icon mdi mdi-check"></i>
                                                <label>Done?</label>
                                            </div>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="success" onClick={this.handleStorage}>Save</Button>
                                        <Link to="/" className="btn btn-secondary ml-4 mr-4">Back to list</Link>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
