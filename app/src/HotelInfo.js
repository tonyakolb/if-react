import Image from "./Image";

function HotelInfo(props){
    return(
        <div className='picture'>
            <Image imageUrl={props.imageUrl}
                   name={props.name}/>
            <div className='hotel-name'>{props.name}</div>
            <div className='hotel-location'>{props.city} {props.country}</div>
        </div>
    )
}

export default HotelInfo;