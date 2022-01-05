import React from "react";
import FastDelivery from '../../../Photos/lightening_fast_delivery.png';

const Service3 = (props)=>{
    
    return (
        <div>
             <img className="image" src={FastDelivery} alt="Fast Delivery" width="124" height="210" />
             <h4>{props.data.heading}</h4>
             <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Service3;