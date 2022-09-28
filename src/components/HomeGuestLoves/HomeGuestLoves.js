import HotelInfo from "../HotelInfo/HotelInfo";
import React from "react";
import data from '../../constants/hotels-constants.js';

function HomeGuestLoves(){
    return(
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
    )
}

export default HomeGuestLoves;