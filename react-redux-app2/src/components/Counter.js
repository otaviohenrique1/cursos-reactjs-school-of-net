import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementAction, decrementAction } from "./../actions/CounterActions";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { total, incrementAction, decrementAction } = this.props;
        return (
            <div>
                <div>
                    <button type="button" onClick={ () => decrementAction(total) }>-</button>
                    <h5>{total}</h5>
                    <button type="button" onClick={ () => incrementAction(total) }>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ counterReducer: { total } }) => {
    return { total };
};

const mapToDispachToProps = (dispatch) => bindActionCreators({ incrementAction, decrementAction }, dispatch);

export default connect(mapStateToProps, mapToDispachToProps)(Counter);

/*
    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';

    class Counter extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { total } = this.props;
            return (
                <div>
                    <div>
                        <button type="button" onClick={() => this.props.dispatch({ type: 'DECREMENT' })}>-</button>
                        <h5>{total}</h5>
                        <button type="button" onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>+</button>
                    </div>
                </div>
            );
        }
    }

    const mapStateToProps = ({ counterReducer: { total } }) => {
        // console.log(total);
        return { total };
    };

    export default connect(mapStateToProps)(Counter);
*/