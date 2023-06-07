import React from 'react';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};