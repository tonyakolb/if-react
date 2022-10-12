import React,{useState} from 'react';
import './TopSection.css';
import data from "../../constants/hotels-constants";
import MainImage from '../../assets/images/mainpage.svg';
import Logo from '../../assets/images/logo_triphouse.png';
import Main from "../Main/Main";
import AvailableHomes from "../AvailableHomes/AvailableHomes";

const TopSection =()=>  {
    const [arrSearchPlace, setSearchPlace] = useState([]);
    const [display, setDisplay] = useState('none');
    const [displayError, setDisplayError] = useState('none');

    function showAvailablePlace(e) {
        e.preventDefault();
        const searchString = e.target.value.trim().toLowerCase();

        if (searchString.length === 0) {
            setDisplayError('block');
            setDisplay('none');
            return;
        }

        const searchPlace = data.filter(
            (item) => item.name.trim().toLowerCase().includes(searchString) ||
                item.city.trim().toLowerCase().includes(searchString) ||
                item.country.trim().toLowerCase().includes(searchString),
        );

        setSearchPlace(searchPlace);
        setDisplay('block');
        setDisplayError('none');
    }
    return (
        <>
            <div className='container' style={{ backgroundImage: ` url(${MainImage})` }}>
                <header className="top-section">
            <div>
                <img src={Logo} alt="trip-house_logo"/>
            </div>
            <nav>
                <div className="words">
                    <a href="/"><span className="roboto-400 title-header">Stays</span></a>
                    <a href="/"
                    ><span className="roboto-400 title-header">Attractions</span></a
                    >
                </div>
                <svg width="0" height="0" className="hidden">
                    <symbol viewBox="0 0 24 16" id="menu">
                        <path
                            d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
                        />
                    </symbol>
                    <symbol viewBox="0 0 24 24" id="AccountCircle">
                        <path
                            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM12 20.64C9 20.64 6.348 19.104 4.8 16.776C4.836 14.388 9.6 13.08 12 13.08C14.388 13.08 19.164 14.388 19.2 16.776C17.652 19.104 15 20.64 12 20.64Z"
                        />
                    </symbol>
                    <symbol viewBox="0 0 16 16" id="Night">
                        <path
                            d="M13.6587 5.65871V2.34129H10.3413L8 0L5.65871 2.34129H2.34129V5.65871L0 8L2.34129 10.3413V13.6587H5.65871L8 16L10.3413 13.6587H13.6587V10.3413L16 8L13.6587 5.65871ZM8 12.244C7.37047 12.244 6.76923 12.1026 6.23165 11.855C7.68877 11.183 8.70734 9.71176 8.70734 8C8.70734 6.28824 7.68877 4.81698 6.23165 4.145C6.76923 3.89744 7.37047 3.75597 8 3.75597C10.3413 3.75597 12.244 5.65871 12.244 8C12.244 10.3413 10.3413 12.244 8 12.244Z"
                        />
                    </symbol>
                </svg>
                <div className="icons">
                    <a href="/" className="logo_sett">
                        <svg className="sett_icon">
                            <use href="#Night"/>
                        </svg>
                    </a>
                </div>
                <div className="icons">
                    <a href="/" className="logo_acc">
                        <svg className="acc_icon">
                            <use href="#AccountCircle"/>
                        </svg>
                    </a>
                </div>
                <div className="icons">
                    <a href="/" className="logo_menu">
                        <svg className="menu_icon">
                            <use href="#menu"/>
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
                <Main showAvailablePlace={showAvailablePlace}/>
                <div className="container main__container--free"
                    style={{display,}}>
                    <section className="main__free">
                        <div className="row__free">
                            <div className="main__title title_free">
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
                                    <p className="error__text">Please enter destination or hotel name</p>
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