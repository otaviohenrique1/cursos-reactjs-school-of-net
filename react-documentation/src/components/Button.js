import React, { Component } from 'react';
import PropTypes from "prop-types";

/**
 * Button Component
 * @version 1.0
 * @author Leonan Luppi
 * @description Description text
 * 
 */

export default class Button extends Component {
    static propTypes = {
        /** Color of button */
        color: PropTypes.string,
        /** Text of button */
        text: PropTypes.string,
        /** Size of button */
        size: PropTypes.oneOf(['small', 'medium'])
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button>Click me</button>
        );
    }
}