import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Drawer} from 'antd';
import MobileMenu from './mobileMenu';
import Link from 'next/link';
import Button from '@/pages/Elements/Button/button';

import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };



  return (
    <div>
      <header>
        <div className="container-header">
          <div className="logo">
            <Link href="/home">
              <img src="logo.png" alt=""/>
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li className={router.pathname === '/home' ? 'active' : ''}>
                <Link href="/home">Home</Link>
              </li>
              <li>
                Service
                <div className="dropdown-service">
                  <div className="dropdown-service-content">
                    <div className="item-dropdown">
                      <p>
                        Served Areas <span className="arrow">&#9654;</span>
                      </p>
                      <div className="sub-dropdown">
                        <div className="sub-dropdown-content">
                          <div className="item-dropdown"><Link  href="/service/1">Limo Service in Malibu</Link></div>
                          <div className="item-dropdown"><Link  href="/service/2">Limo Service in Studio City</Link></div>
                          <div className="item-dropdown"><Link  href="/service/3">Limo Service in Encino</Link></div>
                          <div className="item-dropdown"><Link  href="/service/4">Limo Service in Beverly Hills</Link></div>
                          <div className="item-dropdown"><Link  href="/service/5">Limo Service in Long Beach</Link></div>
                          <div className="item-dropdown"><Link  href="/service/6">Limo Service in Hollywood</Link></div>
                        </div>
                      </div>
                    </div>
                    <div className="item-dropdown">
                      <p>Luxury Limo Los Angeles</p>
                    </div>
                    <div className="item-dropdown">
                      <p>LAX Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Beverly Hills Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Concert and Event Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Executive Sedan Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Occasions</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className={router.pathname === '/about' ? 'active' : ''}>
                <Link href="/about">About us</Link>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={router.pathname === '/vehicles' ? 'active' : ''}>
                <Link href="/vehicles">VEHICLES</Link>
              </li>
              <li className={router.pathname === '/blog' ? 'active' : ''}>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="booking-header">
            <Link href="/booking">
              <Button>Book Now</Button>
            </Link>
          </div>
          <div className="mobile-version">
            <span className="mobile-menu-btn" onClick={showDrawer}>
              <span><MenuOutlined/></span>
            </span>
          </div>
          <Drawer width={300} title="Infinite" placement="right" closable={false} onClose={onClose} visible={visible}>
            <MobileMenu/>
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
