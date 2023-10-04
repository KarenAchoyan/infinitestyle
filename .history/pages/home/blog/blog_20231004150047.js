import React, {useEffect} from 'react';
import Details from "./details";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "@/store/review/actions";
import {getBlogs} from "@/store/blog/actions";

const Blog = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs.request());
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 800) {
        setSlidesToShow(1); // Default number of slides for larger screens
      }else if(window.innerWidth <= 1000) {
        setSlidesToShow(2); // Default number of slides for larger screens
      }else{
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={'container-blog'}>
      <h3>What’s New?</h3>
      <h2>Our Blog</h2>
      <div className="blog-row">
        <Slider 
            infinite={false}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            initialSlide={0}
            prevArrow={<LeftOutlined className="carousel-prev" />}
            nextArrow={<RightOutlined className="carousel-next" />}
            >
            {blogs.map((item) => (
              <Details key={item.id} item={item}/>
            ))}
        </Slider>

      </div>
    </div>
  );
};

export default Blog;