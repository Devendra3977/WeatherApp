import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('');
  const [wdata, setWdata] = useState('');
  const [msg, setMsg] = useState('')
  const api_key = '39374e8d07b4f7adb5d179d6b639e6fc';

  useEffect(()=>{
    WeatherData();
  },[city]);


  const WeatherData= async()=>{
    try{
      if(city){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        const res = response.data;
        console.log(res.main)
        setWdata(res.main.temp)
      }
      else{
        console.log("Enter city")
      }
    }
    catch(error){
      console.error(error);
      console.log("Error fetching data")
    }
  }


  return (
    <>
    <div className='main-div'>
      <div className="inputbox">
        <input type='text' placeholder='Enter City'
        value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      </div>
      <div class="weather-container">
    <div class="weather-icon">☀️</div>
    <h1>Weather Information</h1>
    <div class="location" id="cityName">Location: {city}</div>
    <div class="temperature" id="temp">Temperature: {wdata}°C</div>
    <h3>{msg}</h3>
  </div>
    </div>
    </>
  )
}

export default App
