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
  const blog = useSelector((state) => state.blog.selectedBlog) ?? {} // Assuming you have a blog reducer

  useEffect(() => {
    if (id) {
      dispatch(getBlog.request({ id }));
    }
  }, [id, dispatch]);

  useEffect(()=>{
    console.log(blog);
  },[])

  const createdDate = new Date(blog.created_at);
  const formattedDate = createdDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

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
          <h4>{formattedDate}</h4>
          <p>{}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Id;