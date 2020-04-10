import React, { Component } from 'react';
import { getWeatherInfo } from './../API';
import Toast from "./../components/Toast";

export default class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = async ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    searchApi = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo(city);
        this.setState({ weather: data });
        console.log('Request AJAX', this.state.city);
    }
    
    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <input type="text" name="city" placeholder="Enter city name" onChange={this.handleChangeInput} value={ city }/>
                <button type="button" onClick={this.searchApi}>Search</button>
                <hr/>
                <Toast message="Toast Example" delay={3000} color="danger"/>
                {weather && weather.current ? 
                    <div className="wather-info">
                        <h1>{weather.current.weather_descriptions}</h1>
                        <img src={weather.current.weather_icons} alt=""/>
                        <h4>{weather.current.temperature} ºC</h4>
                    </div>
                    : <p>Not yet</p>
                }
            </div>
        );
    }

    /*
        render() {
            const { city, weather } = this.state;
            return (
                <div>
                    <input type="text" name="city" placeholder="Enter city name" onChange={this.handleChangeInput} value={ city }/>
                    <button type="button" onClick={this.searchApi}>Search</button>
                    <hr/>
                    {weather && weather.current ? 
                        <div className="wather-info">
                            <h1>{weather.current.condition.text}</h1>
                            <img src={weather.current.condition.icon} alt=""/>
                            <h4>{weather.current.temp_c} ºC</h4>
                        </div>
                        : <p>Not yet</p>
                    }
                </div>
            );
        }
    */
}