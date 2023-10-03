import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStaff } from '@/store/staff/actions';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {baseUrl} from "@/configs/axiosIntance";

const Staff = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setSlidesToShow(1); // Adjust the number of slides for smaller screens
      } else if(window.innerWidth <= 800) {
        setSlidesToShow(2); // Default number of slides for larger screens
      }else if(window.innerWidth <= 1000) {
        setSlidesToShow(4); // Default number of slides for larger screens
      }else{
        setSlidesToShow(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={'container-staff'}>
      <h3>Our Crew</h3>
      <h2>Take A Look At Our Drivers</h2>
      <div className="slider-staff">
        <div className="slide-step staff">
          <div className="slide-items staff">
        
              {staffList.map((item, index) => (
                  <h1>dsdsd</h1>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
