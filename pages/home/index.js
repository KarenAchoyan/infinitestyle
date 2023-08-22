import React, {useEffect} from 'react';
import Banner from "@/pages/home/banner/banner";
import Service from "@/pages/home/service/service";
import Header from "@/pages/header/header";
import Suggestions from "@/pages/home/suggestion/suggestion";
import Steps from "@/pages/home/steps/steps";
import Review from "@/pages/home/review/review";
import Staff from "@/pages/home/staff/staff";
import Blog from "@/pages/home/blog/blog";
import FooterBanner from "@/pages/home/footerBanner/footerBanner";
import Footer from "@/pages/footer/footer";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "@/store/review/actions";
import {getStaff} from "@/store/staff/actions";
import {getBlogs} from "@/store/blog/actions";

const HomePage = () => {
  const reviews = useSelector(state => state.review.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews.request());
  }, [dispatch]);


  return (
    <div>
      <Head>
        <title>Home infinite</title>
      </Head>
      <Header/>
      <Banner/>
      <Service/>
      <Suggestions/>
      <Steps/>
      <Review reviews={reviews}/>
      <Staff/>
      <Blog/>
      <FooterBanner/>
      <Footer/>
    </div>
  );
};

export default HomePage;