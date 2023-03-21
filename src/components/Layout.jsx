import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './seo';

function Layout({ children }) {
  return (
    <>
      <SEO />
      <div className="content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
