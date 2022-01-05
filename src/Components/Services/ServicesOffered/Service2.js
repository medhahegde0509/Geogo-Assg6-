import React from "react";
import LiveOrder from '../../../Photos/live_order_tracking.png';

const Service2 = (props)=>{
    
    return (
        <div>
             <img src={LiveOrder} alt="Live-Order" width="120" height="206" />
            <h4>{props.data.heading}</h4>
            <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Service2;