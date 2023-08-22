import React from 'react';

const BannerText = ({text}) => {
  return (
    <div className={'banner-text'} style={{backgroundImage: `url(background-banner.png)`}}>
      {text}
    </div>
  );
};

export default BannerText;