import React from "react";
import LoginSinup from './Section1/loginsinup';
import './Section1/section1.css';
import SearchForm from "./Section1/searchform";
import CityList from './Section1/citylist';

const Section1 = (props) =>{
     const Popular_cities_india=["Ahmedabad","Bangalore","Chennai",
                         "Delhi","Gurgaon","Hyderabad","Kolkata","Mumbai",
                        "Pune","& more."];
    
    return(   
        <div className="section1">
            <LoginSinup/>
            <h2 id="ani" className="animation" ><span></span></h2>
            <h3>{props.h3}</h3>
            <SearchForm placeholder="Enter your delivery location"/>
            <h4>{props.h4}</h4>
            <CityList cities={Popular_cities_india}/>
        </div>
    )
}

export default Section1;