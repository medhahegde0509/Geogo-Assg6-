import React from "react";
import Service1 from "./ServicesOffered/Service1";
import Service2 from "./ServicesOffered/Service2";
import Service3 from "./ServicesOffered/Service3";
import './ServicesOffered/Services.css';



const Service = ()=>{
    const data1={
        heading:"No Minimum Order",
        description:"Order in for yourself or for the group, with no restrictions on order value"
    }
    const data2={
        heading:"Live Order Tracking",
        description:"Know where your order is at all times, from the restaurant to your doorstep"
    }
    const data3={
        heading:"Lightning-Fast Delivery",
        description:"Experience Swiggy's superfast delivery for food delivered fresh & on time"
    }

    return (
        <div className="feature-container">
            <div className="features">
                <Service1 data={data1}/>
                <Service2 data={data2}/>
                <Service3 data={data3}/>
            </div>
        </div>
    )
}

export default Service;