import React, { useState } from 'react'
import "./WeatherApp.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchIcon from "../Images/search.png"
import clear from "../Images/clear.png"
import cloud from "../Images/cloud.png"
import drizzle from "../Images/drizzle.png"
import rain from "../Images/rain.png"
import snow from "../Images/snow.png"
import wind from "../Images/wind.png"
import humidity from "../Images/humidity.png"
export default function WeatherApp() {

  let api_key = "f3aab99dfa38bd3f721442d874b59f72";
  const[wicon,setWicon]= useState(cloud)

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value === "") {
      return 0
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    
    let response = await fetch(url);
    if (response.status === 404) {
      toast.error('City not found', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temp = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    humidity[0].innerHTML = `${data.main.humidity} %`;
    wind[0].innerHTML = `${Math.floor(data.wind.speed)} km/h`;
    temp[0].innerHTML = `${Math.floor(data.main.temp)}ºc`;
    location[0].innerHTML = data.name

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setWicon(clear)
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setWicon(cloud)
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setWicon(drizzle)
    }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
    setWicon(drizzle)
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain)
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(rain)
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow)
    }else{
      setWicon(clear)
    }

  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };
  return (
    <div className="container">
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search' onKeyDown={handleKeyPress} />
        <div className='search-icon' onClick={() => { search() }}>
          <img src={searchIcon} />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24ºc </div>
      <div className="weather-location">London</div>
      <div className='data-container'>
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64 %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>


  )
}
