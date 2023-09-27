import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Button from "@/pages/Elements/Button/button";
import BookingForm from "@/components/bookingForm";

const Banner = ({isLoading}) => {
    const [isHeaderVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                setHeaderVisible(true); // Scroll is at the top
            }
            else {
                setHeaderVisible(false); // Scroll is not at the top
            }
            prevScrollPos = currentScrollPos;
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div>
            <div className={'banner-slider'}>
                <div className={isHeaderVisible ? "curtain-banner" : "curtain-banner close"}>
                    <img  loading='lazy' src="banner.png"/>
                </div>
                <div className="content-banner" style={{backgroundImage: `url(background-banner.png)`}}>
                    <h1>High Service For Every Customer</h1>
                    <div className="content-banner-info">
                        <div className="left-info">
                           {isLoading && 
                            <BookingForm/>
                           }

                        </div>
                        <div className="right-info">
                            <img src={'car.png'} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;