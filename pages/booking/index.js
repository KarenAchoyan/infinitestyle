import React, {useState} from 'react';
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
import BookingForm from "@/components/bookingForm";


const Booking = () => {

  return (
    <div>
      <Header/>
        <BookingForm/>
        <BookingForm/>
      <Footer/>
    </div>
  );
};

export default Booking;
