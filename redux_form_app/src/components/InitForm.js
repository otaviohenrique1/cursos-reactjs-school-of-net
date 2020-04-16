import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getInitialFetch } from "./../actions";

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        { touched &&
            ((error && <span className="text-danger">{error}</span>) || (error && <span className="text-warning">{warning}</span>))
        }
    </div>
);

const warn = (values) => {
    const warnings = {};
    const { name } = values;

    if (name && name.toString().legth <= 2) {
        warnings.name = 'To Short';
    }

    return warnings;
};

const validate = (values) => {
    const errors = {};
    const { name } = values;

    if (!name) {
        errors.name = 'Required';
    }

    // if (name && name.toString().legth <= 2) {
    //     errors.name = 'To Short';
    // }

    return errors;
};

class InitForm extends Component {
    componentWillMount() {
        this.props.fetchInitial();
    }

    render() {
        const { onClick, onChangeName } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Enter your name:</label>
                    <Field
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        component={renderField}
                        className="form-control"
                        onChange={onChangeName}
                        // validate={[ required, toShort ]}
                    />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary"onClick={(e) => onClick(e, this.props.initialValues)}>Send</button>
                </div>
            </form>
        );
    }
}

// Component
/*
    const InitForm = ({ onClick, onChangeName }) => {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Enter your name:</label>
                    <Field
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        component="input"
                        className="form-control"
                        onChange={onChangeName}
                    />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary"onClick={onClick}>Send</button>
                </div>
            </form>
        );
    }
*/

const mapStateToProps = (state) => {
    return {
        initialValues: state.name.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitial: () => dispatch(getInitialFetch())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'initForm',
    enableReinitialize: true,
    validate,
    warn
})(InitForm));