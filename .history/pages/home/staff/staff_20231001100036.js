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
        setSlidesToShow(4); // Adjust the number of slides for smaller screens
      } else if(window.innerWidth <= 800) {
        setSlidesToShow(2); // Default number of slides for larger screens
      }else if(window.innerWidth <= 500) {
        setSlidesToShow(1); // Default number of slides for larger screens
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
            <Slider
              ref={sliderRef}
              infinite={true}
              speed={500}
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              initialSlide={0}
              prevArrow={<LeftOutlined className="carousel-prev" />}
              nextArrow={<RightOutlined className="carousel-next" />}
            >
              {staffList.map((item, index) => (
                <div key={index} className={`slide-item staff`}>
                  <div className="item-staff position-down">
                    <img src={baseUrl + '/' + item.avatar} alt={item.fullname} />
                    <h2>{item.fullname}</h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
