import React, { useState } from 'react';
import data from '../../constants/hotels-constants';
import Icons from '../../constants/sprite';
import MainImage from '../../assets/images/mainpage.svg';
import Main from '../Main/Main';
import AvailableHomes from '../AvailableHomes/AvailableHomes';
import './TopSection.css';

const TopSection = () => {
  const [arrSearchPlace, setSearchPlace] = useState([]);
  const [display, setDisplay] = useState('true');
  const [displayError, setDisplayError] = useState('true');

  function showAvailablePlace(e) {
    e.preventDefault();
    const searchString = e.target.value.trim().toLowerCase();

    if (searchString.length === 0) {
      setDisplayError('block');
      setDisplay('none');
      return;
    }

    const searchPlace = data.filter(
      (item) =>
        item.name.trim().toLowerCase().includes(searchString) ||
        item.city.trim().toLowerCase().includes(searchString) ||
        item.country.trim().toLowerCase().includes(searchString)
    );

    setSearchPlace(searchPlace);
    setDisplay('block');
    setDisplayError('none');
  }
  return (
    <>
      <div className="container" style={{ backgroundImage: ` url(${MainImage})` }}>
        <header className="top-section">
          <div>
            <img src={`${Icons}#logo-vector`} alt="trip-house_logo" />
          </div>
          <nav>
            <div className="words">
              <a href="/">
                <span className="roboto-400 title-header">Stays</span>
              </a>
              <a href="/">
                <span className="roboto-400 title-header">Attractions</span>
              </a>
            </div>
            <div className="icons">
              <a href="/" className="logo_sett">
                <use xlinkHref={`${Icons}#menu`} />
              </a>
            </div>
            <div className="icons">
              <a href="/" className="logo_acc">
                <svg className="acc_icon">
                  <use xlinkHref={`${Icons}#AccountCircle`} />
                </svg>
              </a>
            </div>
            <div className="icons">
              <a href="/" className="logo_menu">
                <svg className="menu_icon">
                  <use xlinkHref={`${Icons}#menu`} />
                </svg>
              </a>
            </div>
          </nav>
        </header>
        <Main showAvailablePlace={showAvailablePlace} />
        <div className="container main__container--free" style={{ display }}>
          <section className="main__free">
            <div className="row__free">
              <div className="main_title">
                <h2>Available hotels</h2>
              </div>
              <div className="main__free--hotel">
                {arrSearchPlace.map((place) => (
                  <AvailableHomes
                    key={place.id}
                    city={place.city}
                    name={place.name}
                    country={place.country}
                    imageUrl={place.imageUrl}
                  />
                ))}
                <div
                  className="free__error"
                  style={{
                    display: displayError,
                  }}
                >
                  <p className="error_text">Please enter destination or hotel name</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TopSection;
