import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "@/store/car/actions";
import {baseUrl} from "@/configs/axiosIntance";
import Link from "next/link";

const Service = () => {
  const images = useSelector((state) => state.car);
  const [avatar, setAvatar] = useState({});
  const dispatch = useDispatch();
  const [smallImages, setSmallImages] = useState([]);

  useEffect(() => {
    if (images.cars[0]) {
      setAvatar(images.cars[0])
    }
  }, [images])

  useEffect(() => {
    dispatch(getCars.request());
  }, [dispatch]);

  function changeToAvatar(id) {
    const img = images.cars.find(x => x.id === id);
    setAvatar(img);
  }

  return (
    <div className="service-container">
      <h3>Our Fleet</h3>
      <h2 className='title-service'>Brand New Cars At Your Service</h2>

      <div className="car-service-content">
        <h1>Mercedes Benz S Class 2022</h1>
        <h2>Luxury Sedan</h2>

        <div className="row-car-service">
          <div>
            <span className="item-row">
              <img src={'passenger.png'} alt=""/>
              Passengers
              <span className={'result-number'}>{avatar.passengersNumber}</span>
            </span>
            <span className="item-row">
              <img src={'Frame.svg'} alt=""/>
              Bags
             <span className={'result-number'}> {avatar.bagsCount}</span>
            </span>
            <span className="item-row">
              <img src={'wifi.svg'} alt=""/>
              On Board Wi-Fi
            </span>
          </div>
        </div>
        <div className="car-service">
          <div className="car-avatar">
            <img src={baseUrl + "/" + avatar.avatar} alt=""/>
          </div>
          <div className="cars-choose">
            {images.cars.map((item) => (
              <div key={item.id} className="item-choose">
                <img
                  src={baseUrl + "/" + item.avatar}
                  onClick={() => changeToAvatar(item.id)}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row-infos-btns">
          <div className="info-show-btn danger">
            {avatar.price} $
          </div>
          <div className="info-show-btn primary">
            <Link href={'/vehicles'}>
              Show All Vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
