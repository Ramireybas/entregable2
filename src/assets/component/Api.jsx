import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Api = () => {
    const [weather,setWeather] = useState()
    const [celsius,setCelsius]=useState(true);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success);
        function success(pos) {
            const crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a034bc5dddb7bda25c10fca7261e937d&units=metric`)
            .then (res => {
              // res.data.weather.main?.temp =  res.data.weather.main?.temp - 273.15
                setWeather(res.data)
                console.log(res.data.main?.temp)
                setCelsius(res.data.main?.temp )
                
            })
        }
},[])

console.log(weather)
    return (
        <div>
            <h1> City {weather?.name}</h1>
            <h2>  Country {weather ?.sys.country}</h2>  
         
            <p> <i className ='fa-solid fa-temperature-three-quarters'></i>temp {celsius ? Math.floor( weather?.main.temp) : Math.floor ((weather?.main.temp * 9/5)+32)} {celsius ? 'ºC':' ºF' }</p>
            <p><i className ='fa-solid fa-wind'></i>wind speed {weather?.wind.speed} m/s</p>
            <p><i className='fa-solid fa-droplet'></i>humidity {weather?.main.humidity} %</p>

            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="" />
            <p>{weather?.weather[0].description}</p>
          
            <button className='b' onClick={()=> setCelsius (!celsius)}>ºc / ºf </button>
        </div>
    );
};

export default Api;