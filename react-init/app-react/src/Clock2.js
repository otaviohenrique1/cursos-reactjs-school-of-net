import React, { Component } from 'react';

export default class Clock2 extends Component {
    // State e ciclo de vida componentes
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
            .toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
    }

    // metodos de ciclo de vida componentes
    // componentDidMount() {}
    // componentWillUnmount() {}
    // componentDidUpdate() {}
    // componentWillMount() {}
    // componentWillReceiveProps() {}
    // componentDidCatch() {}
        
    componentDidMount() {
        this.timer = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    updateClock() {
        this.setState({
            time: new Date()
            .toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        });
    }

    render() {
        const { time } = this.state;

        return(
            <h1>{time}</h1>
        );
    }
}