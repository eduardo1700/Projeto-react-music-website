import React from 'react'
import"./WeatherApp.css"
import search from"../Images/search.png"
import clear from "../Images/clear.png"
import cloud from "../Images/cloud.png"
import drizzle from "../Images/drizzle.png"
import rain from "../Images/rain.png"
import snow from "../Images/snow.png"
import wind from "../Images/wind.png"
import humidity from "../Images/humidity.png"
export default function WeatherApp() {
  return (
    <div className="container">
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search'/>
        <div className='search-icon'>
          <img src={search} />
        </div>
      </div>

    </div>
  )
}
