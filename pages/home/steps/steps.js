import React from 'react';
import { Typography } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import Button from '@/pages/Elements/Button/button';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from "next/link";

const { Title } = Typography;

const Steps = () => {
  return (
    <div className="container-steps">
      <Title level={3}>How It Works</Title>
      <Title level={2}>Reservation With 3 Simple Steps</Title>

      <Carousel
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={true}
        autoPlay={true}
        interval={3000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              className="carousel-prev"
              onClick={onClickHandler}
              title={label}
            >
              <LeftOutlined />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              className="carousel-next"
              onClick={onClickHandler}
              title={label}
            >
              <RightOutlined />
            </button>
          )
        }
      >
        <div className="slide-item">
          <div className="container-step">
            <div className="slide-place-1">
              <img src={'person-2.svg'} className='person-step' alt=""/>
            </div>
            <div className="slide-place-3">
              <div className="content-slide-place">
                <h1>Step One!</h1>
                <h2>Choose Location</h2>
                <h3>Choose your location and find your best car.</h3>
                <Link href={'/booking'}>
                  <Button>Reserve Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div className="container-step">
            <div className="slide-place-1">
              <img src={'person-1.png'} className='person-step' alt=""/>
            </div>
            <div className="slide-place-3">
              <div className="content-slide-place">
                <h1>Step Two!</h1>
                <h2>Pick-up date & time</h2>
                <h3>Select your pick up date and
                  time to book your car.</h3>
                <Link href={'/booking'}>
                  <Button>Reserve Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div className="container-step">
            <div className="slide-place-1">
              <img src={'person-3.png'} className='person-step' alt=""/>
            </div>
            <div className="slide-place-3">
              <div className="content-slide-place">
                <h1>Step three!</h1>
                <h2>Reserve your car</h2>
                <h3>Book your car and we will come
                  directly to you.</h3>
                <Link href={'/booking'}>
                  <Button>Reserve Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Steps;
