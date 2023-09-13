import React, {useState} from 'react';
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
import BookingForm from "@/components/bookingForm";
import Head from "next/head";


const Booking = () => {

  return (
    <div>
      <Header/>
      <Head>
      <title>Infinite - Book A Limo In Los Angeles</title>
      </Head>
        <BookingForm/>
      <Footer/>
    </div>
  );
};

export default Booking;
