import React from "react";
import Service from "./Footer-items/services";
import './footer.css';
import City from "./Footer-items/cities";
import Logo from "./Footer-items/social";

const footer=()=>{
    const companyInfo=[
        {url:"/aboutUs",text:"About us" },
        {url:"/team",text:"Team" },
        {url:"/careers",text:"Careers" },
        {url:"/swiggyBlog",text:"Swiggy Blog" },
        {url:"/bugBounty",text:"Bug Bounty" },
        {url:"/swiggySuper",text:"Swiggy One" },
        {url:"/swiggyCorporate",text:"Swiggy Corporate" },
        {url:"/swiggyInstamart",text:"Swiggy Instamart" }
    ]

    const contactInfo=[
        {url:'/help',text:'Help & Support'},
        {url:'/partner',text:'Partner with us'},
        {url:'/ride',text:'Ride with us'}
    ]

    const PrivacyInfo=[
        {url:'/terms',text:'Terms & Conditions'},
        {url:'/refund',text:'Refund & Cancellation'},
        {url:'/privacy',text:'Privacy Policy'},
        {url:'/cookies',text:'Cookie Policy'},
        {url:'/offer',text:'Offer Terms'},
        {url:'/phising',text:'Phishing & Fraud'}
    ]

    const A_to_D_cities=[
        {url:'/abohar',text:'Abohar'},
        {url:'/adilabad',text:'Adilabad'},
        {url:'/adityapur',text:'Adityapur'},
        {url:'/adoni',text:'Adoni'},
        {url:'/agartala',text:'Agartala'},
        {url:'/agra',text:'Agra'},
        {url:'/aghmedabad',text:'Ahmedabad'},
        {url:'/ahmednagar',text:'Ahmednagar'},
        {url:'/agartala',text:'Aizwal'},
        {url:'/agartala',text:'Ajmer'},
        {url:'/agartala',text:'Akola'},
        {url:'/agartala',text:'Alappuzha'},
        {url:'/agartala',text:'Aligar'},
        {url:'/agartala',text:'Alipurduar'},
        {url:'/agartala',text:'Allahabad'},
        {url:'/agartala',text:'Almora'},
        {url:'/agartala',text:'Alwar'},
        {url:'/agartala',text:'Ambala'},
        {url:'/agartala',text:'Ambikapur'},
        {url:'/agartala',text:'Ambur'}

    ]
    const D_to_K_cities=[
        {url:'/dausa',text:'Dausa'},
        {url:'/davanagere',text:'Davanagere'},
        {url:'/dehradun',text:'Dehradun'},
        {url:'/dehri',text:'Dehri'},
        {url:'/delhi',text:'Delhi'},
        {url:'/delhi',text:'Deoghar'},
        {url:'/delhi',text:'Dewas'},
        {url:'/delhi',text:'Dhamtari'},
        {url:'/delhi',text:'Dhanbad'},
        {url:'/delhi',text:'Dhar'},
        {url:'/delhi',text:'Dharamshala'},
        {url:'/delhi',text:'Dharmapuri'},
        {url:'/delhi',text:'Dharwad'},
        {url:'/delhi',text:'Dhoraji'},
        {url:'/delhi',text:'Dhule'},
        {url:'/delhi',text:'Dibrugarh'},
        {url:'/delhi',text:'Digha'},
        {url:'/delhi',text:'Dimapur'},
        {url:'/delhi',text:'Dindigul'},
        {url:'/delhi',text:'Diu'}
    ]
    const K_to_P_cities=[
        {url:'/kishanganj',text:'Kishanganj'},
        {url:'/kishangarh',text:'Kishangarh'},
        {url:'/kochi',text:'Kochi'},
        {url:'/kodaikanal',text:'Kodaikanal'},
        {url:'/kolar',text:'Kolar'},
        {url:'/kolar',text:'Kolhapur'},
        {url:'/kolar',text:'Kolkata'},
        {url:'/kolar',text:'Kollam'},
        {url:'/kolar',text:'Kopargaon'},
        {url:'/kolar',text:'Koppal'},
        {url:'/kolar',text:'Korba'},
        {url:'/kolar',text:'Kota'},
        {url:'/kolar',text:'Kotdwar'},
        {url:'/kolar',text:'Kothagudem'},
        {url:'/kolar',text:'Kothamangalam'},
        {url:'/kolar',text:'Kottakkal'},
        {url:'/kolar',text:'Kottarakara'},
        {url:'/kolar',text:'Kottayam'},
        {url:'/kolar',text:'Kovilpatti'},
        {url:'/kolar',text:'Kozhikode'}

        
    ]
    const P_to_Z_cities=[
        {url:'/pudu',text:'Pudukkottai'},
        {url:'/pune',text:'Pune'},
        {url:'/puri',text:'Puri'},
        {url:'/purnea',text:'Purnea'},
        {url:'/purulia',text:'Purulia'},
        {url:'/purulia',text:'Pusad'},
        {url:'/purulia',text:'Puttur'},
        {url:'/purulia',text:'Puttur-Karnataka'},
        {url:'/purulia',text:'Rae-Bareli'},
        {url:'/purulia',text:'Raghunathpur'},
        {url:'/purulia',text:'Raiganj'},
        {url:'/purulia',text:'Raigarh'},
        {url:'/purulia',text:'Raipur'},
        {url:'/purulia',text:'Rajahmundry'},
        {url:'/purulia',text:'Rajapalayam'},
        {url:'/purulia',text:'Rajgarh'},
        {url:'/purulia',text:'Rajkot'},
        {url:'/purulia',text:'Rajnandgaon'},
        {url:'/purulia',text:'Rajsamand'},
        {url:'/purulia',text:'Ramagundam'}

    ]
    return(
        <div className="footer">
            <Service h1="Company" links1={companyInfo}
                     h2="Contact" links2={contactInfo}
                     h3="Legal" links3={PrivacyInfo}/>
            <City h1="We deliver to" links1={ A_to_D_cities}
                links2={D_to_K_cities} links3={K_to_P_cities} links4={P_to_Z_cities}/>
            <Logo/>
        </div>
    )
}

export default footer;