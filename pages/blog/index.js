import React, {useEffect} from 'react';
import Button from "@/pages/Elements/Button/button";
import FooterBanner from "@/pages/home/footerBanner/footerBanner";
import Details from "@/pages/home/blog/details";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "@/store/blog/actions";

const Blog = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs.request());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Infinite - Book A Limo In Los Angeles</title>
      </Head>
      <Header/>
      <div className={'Blog'}>
        <div className="banner-blog">
          <div className="image-banner-blog">
            <img src='image.png' alt=""/>
          </div>
          <div className="content-banner-blog">
            <h1>The Best Suv For A Infinite Service</h1>
            <h4>November 29, 2022</h4>
            <p>Which SUV is the best for limousine services? We will share our experience with you. American
              full-size SUVs are some of the best in the world. Stretch out in luxury limos like the GMC
              Yukon, Chevrolet Suburban, or Ford Expedition. If you’re looking for something even more
              spacious and comfortable, try the Lincoln Navigator or Cadillac Escalade. Many have attempted to
              create an SUV that can seat seven passengers and their luggage, but only the USA has been
              successful. For example, Lexus LX and Infinity QX80 are great vehicles but they don’t have
              enough space to comfortably transport seven people</p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="blog-row">
          {blogs.map((item) => (
            <Details key={item.id} item={item}/>
          ))}
        </div>
        <FooterBanner/>

      </div>
      <Footer/>
    </div>
  );
};

export default Blog;