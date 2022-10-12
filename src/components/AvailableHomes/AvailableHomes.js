import React from 'react';

function AvailableHomes({ city, country, name, imageUrl }) {
    return (
        <div>
            <figure className="main__free--element">
                <img src={imageUrl} alt={name}/>
                <figcaption className="main__name--img">
                    <a className="nav__link--country">{name}</a>
                    <a className="main__name--country">
                        {city}<br/>
                        {country}
                    </a>
                </figcaption>
            </figure>
        </div>
    );
}

export default AvailableHomes;