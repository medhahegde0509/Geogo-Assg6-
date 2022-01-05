import React from "react";
import './footersection.css';


const service = (props)=>{
    const {h1,h2,h3,links1,links2,links3}=props
    return(
        <div className="foot">
        <div className="section">
            <div className="col1">
                <h5>{h1}</h5>
                <nav>
                    <ul>
                        {links1.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                    </ul>
                </nav>
            </div>
            <div className="col2">
                <h5>{h2}</h5>
                <nav>
                    <ul>
                         {links2.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                    </ul>
                </nav>
            </div>
            <div className="col3">
                <h5>{h3}</h5>
                <nav>
                    <ul>
                        {links3.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                    </ul>
                </nav>
            </div>
            <div className="col4">
                <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img className="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="app_store" width="220" /></a>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android"><img className="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="google_play_store" width="220"/></a>
            
            </div>
        </div>
        <hr/>
        </div>
    
    )
}

export default service;