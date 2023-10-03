import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();
import { getContact, updateContact } from '@/store/about/actions';
import { useDispatch, useSelector } from 'react-redux';

// Create a ContactProvider component
export const ContactProvider = ({ children }) => {
  const dispatch = useDispatch();

  const contactInfo = useSelector((state) => state.contact.contact);

  const [contact, setContact] = useState({
    phone:"+37477474747",
    address:"+37477474747",
    email:"+37477474747",
  });


  // Define the state for your contact information
  useEffect(() => {
    dispatch(getContact.request());
  }, [dispatch]);

  useEffect(()=>{
    setContact({...conta})
  },[])

  // You can provide functions to update the contact information here

  return (
    <ContactContext.Provider value={{ contact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
