import React, { createContext, useState,useEffect } from 'react';

// Create a context to hold your contact information
const NavbarContext = createContext();

// Create a ContactProvider component
export const NavBarProvider = ({ children }) => {
  const [subMenu, setSubMenu] = useState("");


  return (
  <ContactContext.Provider value={{ subMenu,setSubMenu }}>
    {children}
  </ContactContext.Provider>
  )
}

export default ContactContext;
