import React, { useEffect, useState } from 'react';

// middleware/authMiddleware.js
import { useRouter } from 'next/router';

const authMiddleware = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    // Check if the code is running on the client-side before accessing localStorage
    if (typeof window !== 'undefined') {
      // Access localStorage only on the client-side
      const isAuthenticated = localStorage.getItem('auth') !== null;

      useEffect(() => {
        if (!isAuthenticated) {
          // User is not authenticated, redirect to the login page
          router.push('/login');
        }
      }, [isAuthenticated, router]);
    }

    return <WrappedComponent {...props} />;
  };
};

export default authMiddleware;
