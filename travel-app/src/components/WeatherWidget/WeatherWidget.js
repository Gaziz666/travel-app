import React, { useState, useEffect } from 'react';
import classes from './WeatherWidget.module.css';

const CountryCapital = { name: "Vena", zip: "542420" };
const lang = 'ru';

const WEATHER_API = `http://api.openweathermap.org/data/2.5/weather?q=${CountryCapital.name}&appid=630198738706e6feb41dd55034d68b96&units=imperial&lang=${lang}`

export default function WeatherWidget() {
    const [temperature, setTemperature] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('')


    useEffect(() => {
        const request = async () => {
            try {
                const response = await fetch(WEATHER_API);
                const data = await response.json();
                console.log(data.weather[0].description);
                setWeatherIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
                setWeatherDescription(data.weather[0].description);
                setTemperature(Math.round((data.main.temp - 32) * 5 / 9));

            } catch (e) {
                console.error(e.message)
            }
        }
        request();

    }, [])



    return (
        <div className={classes.widget} >
            <div>{CountryCapital.name}</div>
            <div>{temperature}°</div>
            <img src={weatherIcon} />
            <div>{weatherDescription}</div>

        </div>
    )
}