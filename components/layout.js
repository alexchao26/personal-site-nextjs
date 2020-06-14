import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '@components/NavBar';
import MobileNavBar from '@components/MobileNavBar';
import Footer from '@components/Footer';

import styles from '@styles/components/layout.module.scss';

// HOC to add layouts to all pages
export default ({ children, currentPage }) => (
  <div className={styles.page}>
    <Head>
      <title>Alex Chao</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet" />
    </Head>
    {/* One of these NavBars will be hidden depending on page size */}
    <NavBar currentPage={currentPage} />
    <MobileNavBar currentPage={currentPage} />

    {/* render the wrapped children (HOC) */}
    <main className={styles.mainContent}>{children}</main>

    {/* Footer Component, isMobile prop is for making the footer appear about menu bar
          on iOS Safari & Chrome (at least)
      */}
    <Footer />
  </div>
);
