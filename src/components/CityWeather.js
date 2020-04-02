import React from 'react';
import CityData from './city-weather.json';

const kelvinCelcius = (kelvin)=> {return (kelvin-273).toFixed(2)};

const CityForcast = () => {

    return (
        CityData.map(city => {
            return (
            <div style = {{border : '2px solid black', margin : '10px', paddingLeft : '10px' }} >
                <h1 style = {{fontSize : '1.5em'}}> {city.name}, {city.sys.country}</h1>
                <p style={{fontWeight:'bold', fontSize:'1em'}}> {city.weather[0].description}</p>
                <div style={{lineHeight:'1em', paddingTop : '1em' }}>
                    <p> min temp: {kelvinCelcius (city.main.temp_min)} °C</p>
                    <p> max temp: {kelvinCelcius (city.main.temp_max)} °C</p>
                    <p> Location: {city.coord.lat}, {city.coord.lon}</p>
                </div>
            </div>
        )})
    )

};

export default CityForcast;