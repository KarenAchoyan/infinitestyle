import React from 'react';
import Button from "@/pages/Elements/Button/button";
import Link from "next/link";

const FooterBanner = ({attachment=false}) => {
  return (
    <div className={'image-footer-banner'} style={{backgroundImage:`url(${'background-banner.png'})`, backgroundAttachment:attachment ? "fixed" : ""}}>
      <div className="container-footer-banner">
        <div className="image-left">
          <img src={'car.png'} alt="car"/>
        </div>
        <div className="right-banner-footer">
          <h1>Your Nex Travel
            With Us?</h1>
          <Link href={'/booking'}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;