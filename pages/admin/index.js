import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "@/pages/admin/header/header";
import authMiddleware from '@/middleware/authMiddleware';

const Home = () => {
  return (
    <div>
      <Navbar>
        <div style={{ minHeight: '100vh' }}>
          admin home
        </div>
      </Navbar>
    </div>
  );
};

export default authMiddleware(Home);
