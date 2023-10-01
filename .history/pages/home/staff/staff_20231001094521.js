import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { baseUrl } from "@/configs/axiosIntance";
import { useDispatch, useSelector } from "react-redux";
import { getStaff } from "@/store/staff/actions";

const Staff = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of staff members to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={'container-staff'}>
      <h3>Our Crew</h3>
      <h2>Take A Look At Our Drivers</h2>
      <Slider {...sliderSettings}>
        {staffList.map((item) => (
          <div key={item.id} className="item-staff position-down">
            <img src={baseUrl + "/" + item.avatar} alt={item.fullname} />
            <h2>{item.fullname}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Staff;
