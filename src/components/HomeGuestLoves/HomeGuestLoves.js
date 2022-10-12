import HotelInfo from "./HotelInfo";
import React from "react";
import data from '../../constants/hotels-constants.js';

function HomeGuestLoves(){
    return(
        <div>
            <h2>Home Guest Loves</h2>
            <div className='pictures'>
                {
                    data.map((item)=>
                        <HotelInfo
                            name={item.name}
                            imageUrl={item.imageUrl}
                            city={item.city}
                            country={item.country}
                        />)}
            </div>
        </div>
    )
}

export default HomeGuestLoves;