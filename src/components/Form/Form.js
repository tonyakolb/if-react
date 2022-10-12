import React from 'react';
import DestinationInput from '../Input/DestinationInput/DestinationInput';
import './Form.css';

const Form = (showAvailablePlace) => {
    return (
        <article className="form-container">
            <form action="/" method="get">
                <div className="row-form">
                    <DestinationInput showAvailablePlace={showAvailablePlace}/>
                    <button
                        type="reset"
                        id="search-btn"
                        className="col-button button-text"
                    >
                        Search
                    </button>
                </div>
            </form>
        </article>
    );
};

export default Form;