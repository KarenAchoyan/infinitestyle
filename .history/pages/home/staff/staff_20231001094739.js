import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStaff } from '@/store/staff/actions';
import Slider from 'react-slick';
import {baseUrl} from "@/configs/axiosIntance";

const Staff = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

  const [currentStaff, setCurrentStaff] = useState(0);

  const goToPrevious = () => {
    setCurrentStaff((prevStaff) => (prevStaff === 0 ? staffList.length - 1 : prevStaff - 1));
  };

  const goToNext = () => {
    setCurrentStaff((prevStaff) => (prevStaff === staffList.length - 1 ? 0 : prevStaff + 1));
  };

  return (
    <div className={'container-staff'}>
      <h3>Our Crew</h3>
      <h2>Take A Look At Our Drivers</h2>
      <div className="slider-staff">
        <div className="slide-step staff">
          <div className="slide-items staff">
            <Slider
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              initialSlide={0}
              beforeChange={(current, next) => setCurrentStaff(next)}
            >
              {staffList.map((item, index) => (
                <div
                  key={index}
                  className={`slide-item staff ${index === currentStaff ? 'active' : ''}`}
                >
                  <div className="item-staff position-down">
                    <img src={baseUrl + '/' + item.avatar} alt="" />
                    <h2>{item.fullname}</h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="slide-buttons-staff">
            <img src={'arrow-left.png'} onClick={goToPrevious} alt="" />
            <img src={'arrow-right.png'} onClick={goToNext} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
