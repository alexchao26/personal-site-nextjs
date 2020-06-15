import Head from 'next/head';
import NavBar from '@components/NavBar';
import MobileNavBar from '@components/MobileNavBar';
import StickyFooter from '@components/StickyFooter';

import styles from '@styles/components/layout.module.scss';

// HOC to add layouts to all pages
export default ({ children, currentPage }) => (
  <div className={styles.page}>
    <Head>
      <title>Alex Chao</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet" />
    </Head>

    {/* One of these NavBars will be hidden depending on page size */}
    <NavBar currentPage={currentPage} />
    <MobileNavBar currentPage={currentPage} />

    {/* render the wrapped children (HOC) */}
    <main className={styles.mainContent}>{children}</main>

    <StickyFooter />
  </div>
);
