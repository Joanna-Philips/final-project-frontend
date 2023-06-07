import React from 'react';
import { TopBar } from './TopBar';

export const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};