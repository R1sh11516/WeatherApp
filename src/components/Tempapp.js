import React, { Fragment, useState, useEffect } from "react";

import "./style.css";

const TempApp=()=>{

    const [city, setCity] = useState(null);
    const [Query, setQuery] = useState(""); 

    useEffect(()=>{
        const  fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${Query}&units=metric&appid=0898c43e66b413655d4a79662805f56f`
            const res=await fetch(url);
            // console.log(res);
            const resToJson=await res.json();
            // console.log(resToJson);
            setCity(resToJson.main);
        }
        fetchApi()
    },[Query])

    return(
        <Fragment>
            <div className="box">
            {/* input field */}
                <div className="input-tab">
                    <input 
                        className="input-field" 
                        type="search" 
                        onChange={(event)=>{
                            setQuery(event.target.value)
                        }}    
                    />
                </div>
                {
                    !city?(<p>Data No Found</p>
                    ):(
                        <div>
                        <div className="info">
                            <h2 className="position">
                            <i className="fas fa-map-marker-alt"></i>
                            {Query}
                            </h2>

                            <h1 className="temperature">{city.temp} °C</h1>

                            <h3 className="temp-ma-min">
                                Min. temp : {city.temp_min} °C | Max. temp : {city.temp_max} °C
                            </h3>
                    
                        </div>
                        </div>
                    )
                }
                

                {/* <div className="wave -one"></div>
                <div className="wave -sec"></div>
                <div className="wave -third"></div>   */}
            </div>
  
        </Fragment>
    )
}

export default TempApp;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//id1:2df4fd7650520fdf44e79c704bcc6184
//id2:0898c43e66b413655d4a79662805f56f
