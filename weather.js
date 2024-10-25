import React, { useState } from 'react'
import axios from 'axios'


export default function Weather() {
     

    const [city, setCity] = useState("")
    const [weather , setWeather] = useState("")
    
    
   const fetchWeather = async() => {
        try{
             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=37e858954eecab0bb7a7b375a28dcc1a`)
             setWeather(response);
             console.log(response)
            }
        catch(error){
            console.log("error while fetching weather",error);
        }
    }
    const handleCityChange = (event) => {
        setCity(event.target.value)
        
    }
    const handleClick = () =>{
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input className='text' type='text' placeholder='enter your city name' value={city} onChange={handleCityChange}></input>
        <button className='btn' onClick={handleClick}>Get Weather</button>
    
        {weather && (
            <>
            <div className='search-output'>
        <h2 style={{fontSize: "20pt"}}>{weather.data.name}</h2>
        <p className='output'>Temp is {weather.data.main.temp}</p>
        <p className='output'>{weather.data.weather[0].description}</p>
        </div>
        </>)
            
        }
        

     
    </div>
  )
}
