import React from 'react';
import './AvailableHomes.css';

const AvailableHomes = ({ city, country, name, imageUrl }) => {
  return (
    <div>
      <figure className="main__free--element">
        <img src={imageUrl} alt={name} />
        <figcaption className="main__name--img">
          <p className="nav__link--country">{name}</p>
          <p className="main__name--country">
            {city}
            {country}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default AvailableHomes;
