import React from 'react';
const Suggestions = () => {
  return (
    <div className={'service-container'}>
      <h3>Why Infinite</h3>
      <h2>Safe Rides With Professional Drivers And New Vehicles</h2>
      <div className="row-suggestion">
        <div className="item-suggestion">
          <div className="header-suggestion" style={{backgroundImage:`url('backSuggestion.png')`}}>
            <div className="logo-suggestion">
              <img src={'vector-1.png'} alt=""/>
            </div>
            <div className="title-suggestion">
              <h3>Experienced Drivers</h3>
            </div>
          </div>
          <div className="content-suggestion">
            <p>
              Our drivers are all licensed professionals with
              decades of experience driving.
            </p>
          </div>
        </div>
        <div className="item-suggestion">
          <div className="header-suggestion" style={{backgroundImage:`url('backSuggestion.png')`}}>
            <div className="logo-suggestion">
              <img src={'2s.png'} alt=""/>
            </div>
            <div className="title-suggestion">
              <h3>Safe Ride</h3>
            </div>
          </div>
          <div className="content-suggestion">
            <p>
              Your safety and comfort are always our top priorities.

            </p>
          </div>
        </div>
        <div className="item-suggestion">
          <div className="header-suggestion" style={{backgroundImage:`url('backSuggestion.png')`}}>
            <div className="logo-suggestion">
              <img src={'3s.png'} alt=""/>
            </div>
            <div className="title-suggestion">
              <h3>Easy Online
                Booking</h3>
            </div>
          </div>
          <div className="content-suggestion">
            <p>
              We provide a simple, straightforward
              experience when it comes to  your
              trip.
            </p>
          </div>
        </div>
        <div className="item-suggestion">
          <div className="header-suggestion" style={{backgroundImage:`url('backSuggestion.png')`}}>
            <div className="logo-suggestion">
              <img src={'vector-1.png'} alt=""/>
            </div>
            <div className="title-suggestion">
              <h3>Brand New Vehicles</h3>
            </div>
          </div>
          <div className="content-suggestion">
            <p>
              Wide selection of 2022-2023 cars and SUVs.Cars are regularly inspected
              and kept in pristine condition.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;