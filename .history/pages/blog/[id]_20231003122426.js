import React, {useEffect} from 'react';
import Button from "@/pages/Elements/Button/button";
import Head from "next/head";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '@/store/blog/actions';

const Id = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const { id } = router.query; // Get the "id" parameter from the URL

  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog); // Assuming you have a blog reducer

  useEffect(() => {
    // Dispatch the action to fetch the blog by its ID
    if (id) {
      dispatch(getBlog.request({ id }));
    }
  }, [id, dispatch]);

  useEffect(()=>{
    console.log(blog);
  },[])
  return (
    <div className='single-blog'>
      <Head>
        <title>Test</title>
      </Head>
      <Header/>
      <div className="banner-blog column-blog">
        <div className="image-banner-blog">
          <img src='../image.png' alt=""/>
        </div>
        <div className="content-banner-blog">
          <h1>{blog.title}</h1>
          <h4>November 29, 2022</h4>
          <p>Which SUV is the best for limousine services? We will share our experience with you. American
            full-size SUVs are some of the best in the world. Stretch out in luxury limos like the GMC
            Yukon, Chevrolet Suburban, or Ford Expedition. If you’re looking for something even more
            spacious and comfortable, try the Lincoln Navigator or Cadillac Escalade. Many have attempted to
            create an SUV that can seat seven passengers and their luggage, but only the USA has been
            successful. For example, Lexus LX and Infinity QX80 are great vehicles but they don’t have
            enough space to comfortably transport seven people</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Id;