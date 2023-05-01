import React,{useEffect, useState} from 'react'
import "./weather.css"
import Weathercard from "./weathercard"
const Weather = () => {
  const[searchValue,setSearchValue]=useState("new delhi ")
  const[tempinfo,setTempInfo]=useState(" ")
  const [dataVal, setDataVal]= useState(" ")
  useEffect(()=>{ const getWeatherInfo=async()=>
    { try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dc91f8c5741a2d36c6a9fd28efb5de68`;
      let res=await fetch(url);
      let data= await res.json();
      const {temp, humidity,pressure}=data.main;
      const{main: weathermood}=data.weather[0];
      const{name}=data;
      const{speed}=data.wind;
      const{country,sunset}=data.sys;
  
      const myNewWeatherInfo={
        temp,
        humidity,pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };
      
      setTempInfo(myNewWeatherInfo);
      
    } catch (error) {
      console.log(error)
    }
  
    }
    
    
    getWeatherInfo();
  },[searchValue]);
  const change=()=>{
    setSearchValue(dataVal);
  }
  return (
    <>
    <div className='wrap'> 
    <div className='search'>
      <input type="search"
      placeholder="search...."
      autoFocus
      id="search"
      className='searchTerm'
     //value={searchValue}
     onChange={(e)=>setDataVal(e.target.value)}></input>
<button className="searchButton" type="button" onClick={change}>
Search
</button>
    </div> 
    </div>

    <Weathercard tempinfo={tempinfo}/>
    </>
  )
 
}

export default Weather
