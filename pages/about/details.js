import React from 'react';

const Details = ({reverse}) => {
  return (
    <div>
      <div className={'item-about'}>
        <div className={reverse ? "content-about-item reverse" : "content-about-item"}>
          <div className="about-section">
            <h4>OUR COMPANY</h4>
            <h1>OUR COMPANY</h1>
            <p>Silimo, founded over 10 years ago, is the leading provider of luxury transportation services in
              Southern California. We are frequently chosen for anyone wanting reliability and style. We have
              hundreds of positive reviews from happy customers all over the internet! And we strive every day
              to live up to and exceed this reputation by offering an immense fleet of vehicles that come in
              different sizes and styles to suit our clients varying needs.</p>
          </div>
          <div className="about-section">
            <img src={'1.png'} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;