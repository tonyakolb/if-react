import React from 'react';
import GooglePlay from '../../assets/images/google-play.svg';
import AppStore from '../../assets/images/App_Store.svg';
import Form from "../Form/Form";

const Main = (showAvailablePlace) => {
    return (
        <div className="page">
            <h1 className="main-title">
                Discover stays<br />
                to live, work or just relax
            </h1>
            <Form showAvailablePlace={showAvailablePlace}/>
            <div className="apps">
                <button type="button" className="download-button google-play-button">
                    <img src={GooglePlay} alt="google-play img" />
                </button>
                <button type="button" className="download-button app-store-button">
                    <img src={AppStore} alt="google-play img" />
                </button>
            </div>
        </div>
    );
};

export default Main;