import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '@/store/review/actions';

const Review = () => {
  const reviews = useSelector((state) => state.review.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews.request());
  }, [dispatch]);

  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? reviews.length - 1 : prevImage - 1));
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage === reviews.length - 1 ? 0 : prevImage + 1));
  };

  const renderStars = (count) => {
    const MAX_STARS = 5;
    const starStyle = {
      filter: 'grayscale(100%)',
    };

    return Array.from({ length: MAX_STARS }, (_, index) => {
      const starIndex = index + 1;
      const starClassName = starIndex <= count ? 'yellow-star' : 'gray-star';

      return <img key={starIndex} src={`${'star'}.png`} alt="" style={starIndex <= count ? null : starStyle} />;
    });
  };


  return (
    <div className="container-review">
      <h3>TESTIMONIALS</h3>
      <div className="slider-review">
        <div className="slide-step review">
          <div className="slide-items review">
            {reviews.map((item, index) => (
              <div
                key={index}
                className={`slide-item review ${index === currentImage ? 'active' : ''}`}
              >
                <div className="container-step-review">
                  <h3>What people say about us?</h3>
                  <h5>{item.content}</h5>
                  <h2>{item.author}</h2>
                  <div className="stars-review">{renderStars(item.stars)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="slide-buttons-review">
            <img src={'arrow-left.png'} onClick={goToPrevious} alt="" />
            <img src={'arrow-right.png'} onClick={goToNext} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
