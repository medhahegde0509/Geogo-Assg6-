import React from "react";
import AppStore from '../../../Photos/app_store_logo.jpeg';
import GooglePlayStore from '../../../Photos/google_play_logo.jpeg'; 

const download = (props)=>{
    const {heading,description}=props
    return(
        <div className="menu">
            <h3 className="heading">{heading}</h3>
            <p className="para">{description}</p>
            <div className="images">
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android"><img className="stores" height="60" width="200" src={GooglePlayStore} alt="google_play_store"/></a>
                <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img className="stores" height="60" width="200" src={AppStore}  alt="app_store"/></a>
            </div>
        </div>
    )
}

export default download;