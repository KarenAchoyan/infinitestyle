import React, { useState } from "react";
import { Button, DatePicker, Input, Select } from "antd";
const {Option} = Select;

const BookingForm = () => {
  const [bookingPage, setBookingPage] = useState(false);

  return (
    <div className="booking-page">
      {bookingPage && (
        <div className="booking-page-content">
          <div className="booking-header">
            <Button onClick={() => setBookingPage(false)}>Distance</Button>
            <Button type="primary" onClick={() => setBookingPage(true)}>
              Hourly
            </Button>
          </div>
          <div className="content-form">
            <div className="header-content-form">Ride Details</div>
            <form action="">
              <div className="pickup-dates">
                <div className="form-group-picker">
                  <DatePicker style={{width: '100%'}}/>
                </div>
                <div className="form-group-picker">
                  <DatePicker.TimePicker style={{width: '100%'}}/>
                </div>
              </div>
              <div className="form-group-field">
                <Input fullWidth={true} placeholder="Pickup location"/>
              </div>
              <div className="form-group-field">
                <Input fullWidth={true} placeholder="Drive location"/>
              </div>
              <div className="form-group-field">
                <Select style={{width: '100%'}} placeholder="DURATION (IN HOURS)">
                  <Option value={0}>0 hours</Option>
                  <Option value={1}>1 hours</Option>
                  <Option value={2}>2 hours</Option>
                  <Option value={3}>3 hours</Option>
                  <Option value={4}>4 hours</Option>
                  <Option value={5}>5 hours</Option>
                  <Option value={6}>6 hours</Option>
                  <Option value={7}>7 hours</Option>
                  <Option value={8}>8 hours</Option>
                  <Option value={9}>9 hours</Option>
                  <Option value={10}>10 hours</Option>
                  <Option value={11}>11 hours</Option>
                  <Option value={12}>12 hours</Option>
                  <Option value={13}>13 hours</Option>
                  <Option value={14}>14 hours</Option>
                  <Option value={15}>15 hours</Option>
                  <Option value={16}>16 hours</Option>
                  <Option value={17}>17 hours</Option>
                  <Option value={18}>18 hours</Option>
                  <Option value={19}>19 hours</Option>
                  <Option value={20}>20 hours</Option>
                  <Option value={21}>21 hours</Option>
                  <Option value={22}>22 hours</Option>
                  <Option value={23}>23 hours</Option>
                  <Option value={24}>24 hours</Option>
                </Select>

              </div>
              <div className="form-group-field">
                <Button style={{height: '50px'}} type="primary" block>
                  CHOOSE A VEHICLE
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!bookingPage && (
        <div className="booking-page-content">
          <div className="booking-header">
            <Button type="primary" onClick={() => setBookingPage(false)}>
              Distance
            </Button>
            <Button onClick={() => setBookingPage(true)}>Hourly</Button>
          </div>
          <div className="content-form">
            <div className="header-content-form">Ride Details</div>
            <form action="">
              <div className="pickup-dates">
                <div className="form-group-picker">
                  <DatePicker style={{width: '100%'}}/>
                </div>
                <div className="form-group-picker">
                  <DatePicker.TimePicker format="HH:mm" style={{width: '100%'}}/>
                </div>
              </div>
              <div className="form-group-field">
                <Input fullWidth={true} placeholder="Pickup location"/>
              </div>
              <div className="form-group-field">
                <Input fullWidth={true} placeholder="Drive location"/>
              </div>
              <div className="form-group-field">
                <Select style={{width: '100%'}} placeholder="Transfer type">
                  <Option value={1}>One Way</Option>
                  <Option value={2}>Return</Option>
                </Select>
              </div>
              <div className="form-group-field">
                <Select style={{width: '100%'}} placeholder="Extra time">
                  <Option value={10}>0 minutes</Option>
                  <Option value={20}>1 minutes</Option>
                  <Option value={30}>2 minutes</Option>
                  <Option value={30}>3 minutes</Option>
                  <Option value={30}>4 minutes</Option>
                  <Option value={30}>5 minutes</Option>
                  <Option value={30}>6 minutes</Option>
                  <Option value={30}>7 minutes</Option>
                  <Option value={30}>8 minutes</Option>
                  <Option value={30}>9 minutes</Option>
                  <Option value={30}>10 minutes</Option>
                  <Option value={30}>11 minutes</Option>
                  <Option value={30}>12 minutes</Option>
                  <Option value={30}>13 minutes</Option>
                  <Option value={30}>14 minutes</Option>
                  <Option value={30}>15 minutes</Option>
                  <Option value={30}>16 minutes</Option>
                  <Option value={30}>17 minutes</Option>
                  <Option value={30}>18 minutes</Option>
                  <Option value={30}>19 minutes</Option>
                  <Option value={30}>20 minutes</Option>
                  <Option value={30}>21 minutes</Option>
                  <Option value={30}>22 minutes</Option>
                  <Option value={30}>23 minutes</Option>
                  <Option value={30}>24 minutes</Option>
                </Select>
              </div>
              <div className="form-group-field">
                <Button style={{height: '50px'}} type="primary" block>
                  CHOOSE A VEHICLE
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;