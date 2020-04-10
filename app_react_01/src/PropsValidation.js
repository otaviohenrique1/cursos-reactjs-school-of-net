import React, { Component } from 'react';
import  PropTypes from 'prop-types';
// import React, { Component, PropTypes } from 'react';

class PropsValidation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
                <h1>{this.props.height}</h1>
            </div>
        );
    }
}

PropsValidation.propsTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    func: PropTypes.func,
    obj: PropTypes.object,
    arr: PropTypes.array
}

PropsValidation.defaultProps = {
    name: 'Nome',
    age: 21,
    height: 1.75
}

export default PropsValidation;