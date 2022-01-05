import React from "react";
import Menu from './Orders/order';
import OrderApp from "./Orders/orderApp";
import './Orders/order.css';

const Order = ()=>{
    return(
        <div className="order-section">
            <Menu heading="Restaurants in your pocket" 
                  description="Order from your favorite restaurants & track on the go, with the all-new Swiggy app."
                  />
            <OrderApp/>      
        </div>
    )
}

export default Order;