import React, {useEffect} from 'react';
import BannerText from "@/pages/about/bannerText/bannerText";
import Details from "@/pages/vehicles/details";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "@/store/car/actions";
import Head from "next/head";

const Vehicles = () => {
  const images = useSelector((state) => state.car.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars.request());
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <Head>
      <title>Infinite - Book A Limo In Los Angeles</title>
      </Head>

      <BannerText text={"Our Vehicles"}/>
      <div className="vehicles-row">
        {images.map((item,index) => (
          <div key={item.id}>
            <Details item={item} type={index%2===0 ? 'reverse' : ''}/>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Vehicles;