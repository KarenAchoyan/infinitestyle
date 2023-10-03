import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();
import { getContact, updateContact } from '@/store/about/actions';
import { useDispatch, useSelector } from 'react-redux';

// Create a ContactProvider component
export const ContactProvider = async ({ children }) => {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact.contact);

  // Define the state for your contact information
  useEffect(async () => {
    const data = dispatch(getContact.request());
  }, [dispatch]);

  useEffect(()=>{
  },[])

  // You can provide functions to update the contact information here
  
    function init(){
          return (
          <ContactContext.Provider value={{ contact }}>
            {children}
          </ContactContext.Provider>
        );
    }
    await 
};

export default ContactContext;
