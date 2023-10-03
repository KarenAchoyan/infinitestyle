import React from 'react';
import { ContactProvider } from '@/providers/ContactContext';

import PropTypes from "prop-types";
import store from "store/store";
import "antd/dist/reset.css";
import '@/styles/fonts.css'
import '@/styles/globals.css'
import 'react-quill/dist/quill.snow.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavBarProvider } from '@/providers/NavBarContext';

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />)
}

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};

function MyApp({ Component, pageProps }) {
  return (
    <ContactProvider>
      <NavBarProvider>
      <App Component={Component} pageProps={pageProps} />
    </ContactProvider>
  );
}

export default store.withRedux(MyApp);
