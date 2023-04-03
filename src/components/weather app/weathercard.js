import React, { useState ,useEffect} from 'react'

const Weathercard = ({tempinfo}) => {
    const [weatherstate,setWeatherState]=useState("")
const{
    temp,
    humidity,pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
}=tempinfo;
let sec=sunset;
let date=new Date(sec);
let sunsetTym= `${date.getHours()}:${date.getMinutes()}`;
 
useEffect(()=>{
    if(weathermood)
    {
        switch(weathermood)
       {
     case "Clouds":
                           { setWeatherState("wi-day-cloudy");
                               break;}
     case "Haze":{setWeatherState("wi-day-haze");
                        break;}
     case "Fog":{setWeatherState("wi-day-fog");
                        break;}
     case "Rainy":{setWeatherState("wi-day-rain");
                        break;}
       case "Snow":{setWeatherState("wi-day-snow");
                        break;}
       case "Thunderstorm":{setWeatherState("wi-day-thunderstorm");
                        break;}
       default: setWeatherState("wi-day-sunny");

        }
    }
},[weathermood]);


  return (
    <>
      <article className='widget'>
      <div className='weatherIcon'>
        <i className={`wi ${weatherstate}`}></i>
      </div>
      <div className='weatherInfo'>
        <div className='temperature'>
          <span>{temp}&deg;</span>
         
        </div>

        <div className='description'>
          <div className='weatherCondition'>{weathermood}</div>
          <div className='place'>{name}, {country}</div>
        </div>
      </div>

      <div className='date'>{new Date().toLocaleString()}  </div>
      <div className='extra-temp'>
        <div className='temp-info-minimax'>
          <div className='two-sided-section'>
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className='extra-info-leftside'>
              {sunsetTym} PM <br/>
              Sunset
            </p>
          </div>
          <div className='two-sided-section'>
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className='extra-info-leftside'>
              {humidity}<br/>
              Humidity
            </p>
        </div>
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className='extra-info-leftside'>
            {pressure} <br/>
              Pressure
            </p>
        </div>
        <div className='two-sided-section'>
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className='extra-info-leftside'>
             {speed} <br/>
             Speed
            </p>
        </div>



        </div>
      </div>
    </article>
    </>
  )
}

export default Weathercard
