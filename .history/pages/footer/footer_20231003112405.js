import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import { getContact } from '@/store/about/actions';
import ContactContext from '@/providers/ContactContext';

const Footer = () => {
  const {contact} = useContext(ContactContext)

  return (
    <footer>
      <div className="container-footer">
        <div className="place-footer">
          <img src={'logo.png'} alt=""/>
          <h4>High Service For Every Customer</h4>
        </div>
        <div className="place-footer">
          <h4>Pages</h4>
          <ul>
            <li><Link href={'/about'}>About us</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/vehicles'}>Vehicles</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
          </ul>
        </div>
        <div className="place-footer">
          <h4>Contact Us</h4>
          <ul>
            {/* <li><a  rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/%D4%BF%D5%A1%D5%AC%D5%AB%D6%86%D5%B8%D5%BC%D5%B6%D5%AB%D5%A1,+%D5%84%D5%AB%D5%A1%D6%81%D5%B5%D5%A1%D5%AC+%D5%86%D5%A1%D5%B0%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80/@37.1514531,-124.5950266,6z/data=!3m1!4b1!4m6!3m5!1s0x808fb9fe5f285e3d:0x8b5109a227086f55!8m2!3d36.778261!4d-119.4179324!16zL20vMDFuN3E?entry=ttu">{contact.address}</a></li> */}
            {/* <li><a href="mailto:infinit@co">{info.email}</a></li> */}
            <li><a href='facetime://+12345166'>{contact.phone}</a></li>
          </ul> 
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>WEB design by <a href="#">HiveSpace</a></p>
        </div>
        <div></div>
      </div>

    </footer>
  );
};

export default Footer;