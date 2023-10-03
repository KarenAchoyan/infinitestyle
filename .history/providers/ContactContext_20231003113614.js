import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();
import { getContact, updateContact } from '@/store/about/actions';
import { useDispatch, useSelector } from 'react-redux';

// Create a ContactProvider component
export const ContactProvider = ({ children }) => {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact.contact) ?? 

  // Define the state for your contact information
  useEffect(async () => {
    dispatch(getContact.request());
  }, [dispatch]);

  return (
    {Object.keys(contact).length > 0 ?(
  <ContactContext.Provider value={{ contact }}>
    {children}
  </ContactContext.Provider>
  )
  )
}

export default ContactContext;
