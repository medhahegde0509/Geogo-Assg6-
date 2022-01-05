import React from "react";
import MinOrder from '../../../Photos/No_minimum_order.png';


const Service1 = (props)=>{
    return (
        <div>
            <img src={MinOrder} alt="Minimum-order" width="115" height="200" />
            <h4>{props.data.heading}</h4>
            <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Service1;