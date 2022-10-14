import React from 'react';

const DestinationInput = ({ showAvailablePlace }) => {
  return (
    <div className="container__forms--first">
      <input
        onChange={showAvailablePlace}
        id="searchPlace"
        className="input__group--input header__choice--city"
        type="search"
        name="city"
        required
      />
      <label className="input__group--label label__city" htmlFor="city">
        Your destination or hotel name
      </label>
    </div>
  );
};

export default DestinationInput;
