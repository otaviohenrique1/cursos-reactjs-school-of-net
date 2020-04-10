import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const lengthOfTrue = data.filter(item => item.check === true).length;
        // const lengthOfFalse = data.filter(item => item.check === false).length;s

        return (
            <div className="text-center counter-display">
                <p className="inline-block">
                    <span className="counter-total">{data.length}</span> itens
                </p>
                <p className="inline-block ml-3">
                    <span className="counter-total">{lengthOfTrue}</span> finished
                </p>

                {/* <p className="inline-block">Total {data.length} of itens</p>
                <p className="inline-block">Total of true {lengthOfTrue}</p>
                <p className="inline-block">Total of false {lengthOfFalse}</p> */}
            </div>
        );
    }
}

/*
    export default class Counter extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { length } = this.props;
            return (
                <div>
                    <p>Total {length} of itens</p>
                </div>
            );
        }
    }
*/