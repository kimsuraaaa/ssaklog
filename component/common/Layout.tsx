import React from 'react';
import dynamic from 'next/dynamic';
import HeadInfo from './HeadInfo';
const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Header />
      <div id="bodyWrap">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
