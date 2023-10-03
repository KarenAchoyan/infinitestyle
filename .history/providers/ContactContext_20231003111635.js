import React, { createContext, useState } from 'react';

// Create a context to hold your contact information
const ContactContext = createContext();

// Create a ContactProvider component
export const ContactProvider = ({ children }) => {
  // Define the state for your contact information
  const [contact] = useState({
    phone:"+37477474747"
  });

  // You can provide functions to update the contact information here

  return (
    <ContactContext.Provider value={{ contact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
