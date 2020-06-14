import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '@components/NavBar';
import MobileNavBar from '@components/MobileNavBar';
import Footer from '@components/Footer';

import styles from '@styles/components/layout.module.scss';

// HOC to add layouts to all pages
export default ({ children, currentPage }) => {
  const [isBrokenBrowser, setIsBrokenBrowser] = useState(false);
  // access browser APIs via useEffect (will run JS when loaded to the browser)
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    if (navigator.userAgent.includes('Mobi') && navigator.userAgent.includes('Safari')) {
      setIsBrokenBrowser(true);
    }
  }, []);
  return (
    <div className={`${styles.page} ${isBrokenBrowser ? styles.brokenMobileBrowser : ''}`}>
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
      <Footer />
    </div>
  );
};
