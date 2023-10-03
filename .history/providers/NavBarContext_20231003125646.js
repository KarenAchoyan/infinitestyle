import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();
import { getContact, updateContact } from '@/store/about/actions';
import { useDispatch, useSelector } from 'react-redux';

// Create a ContactProvider component
export const NavBarProvider = ({ children }) => {
  const [subMenu, setSubMenu] = useState("");


  return (
  <ContactContext.Provider value={{ contact,setSubMenu }}>
    {children}
  </ContactContext.Provider>
  )
}

export default ContactContext;
