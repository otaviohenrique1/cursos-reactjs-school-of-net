import axios from "axios";

const getTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
}

const getWeatherInfo = async (q) => {
    // return axios.get(`http://api.weatherstack.com/current?access_key=47a0cc46358456680d90294a9a01d823&query=New%20York`);
    return await axios.get(`http://api.weatherstack.com/current?access_key=47a0cc46358456680d90294a9a01d823&query=${q}`);
}

export {
    getTodos,
    getWeatherInfo
}