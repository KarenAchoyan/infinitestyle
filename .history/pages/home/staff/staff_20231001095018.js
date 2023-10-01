import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStaff } from '@/store/staff/actions';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Staff = () => {
  const staffList = useSelector((state) => state.staff.staffList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

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
              prevArrow={<LeftOutlined className="carousel-prev" />}
              nextArrow={<RightOutlined className="carousel-next" />}
            >
              {staffList.map((item, index) => (
                <div
                  key={index}
                  className={`slide-item staff`}
                >
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
