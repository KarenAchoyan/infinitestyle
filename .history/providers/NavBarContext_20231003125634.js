import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();
import { getContact, updateContact } from '@/store/about/actions';
import { useDispatch, useSelector } from 'react-redux';

// Create a ContactProvider component
export const NavBarProvider = ({ children }) => {
  const [subMenu, setSubMenu] = useState()

  // Define the state for your contact information
  useEffect(async () => {
    dispatch(getContact.request());
  }, [dispatch]);

  return (
  <ContactContext.Provider value={{ contact }}>
    {children}
  </ContactContext.Provider>
  )
}

export default ContactContext;
