import React, {useEffect} from 'react';
import {baseUrl} from "@/configs/axiosIntance";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "@/store/review/actions";
import {getStaff} from "@/store/staff/actions";
import {getBlogs} from "@/store/blog/actions";

const Staff = () => {
  const staffList = useSelector((state) => state.staff.staffList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaff.request());
  }, [dispatch]);

  return (
    <div className={'container-staff'}>
      <h3>Our Crew</h3>
      <h2>Take A Look At Our Drivers</h2>
      <div className="row-staff ">
        {staffList.map((item) => (
          <div key={item.id} className="item-staff position-down">
            <img src={baseUrl+"/"+item.avatar} alt=""/>
            <h2>{item.fullname}</h2>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Staff;