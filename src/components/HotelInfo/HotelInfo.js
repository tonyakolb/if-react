import React from 'react'

function HotelInfo({imageUrl,name,city,country}){
    return(
        <div className='picture'>
            <img src={imageUrl}
                   alt={name}/>
            <div className='hotel-name'>{name}</div>
            <div className='hotel-location'>{city} {country}</div>
        </div>
    )
}

export default HotelInfo;