import { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const Weather = ({city_name}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherError, setWeatherError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getWeatherData = async () => {
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`
        ).then(response => {
            setLoading(true);
            setWeatherData(response.data); 
        }).catch(error =>{
            setWeatherError(true);
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        if(!weatherData){
            getWeatherData(); 
        }
        console.log(weatherData);
    });

    return (
        <div class="weather-block">
            {loading && <p>Loading...</p>}
            { weatherError && <h2>Could not load city</h2> }
            {
                weatherData && (
                    <div>
                        <h2>
                              {weatherData.name} {weatherData.sys.country}
                              {weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon && (
                                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
                              )}
                        </h2>
                        <p>{weatherData.main.temp}C</p>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Weather;
