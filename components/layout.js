import Head from 'next/head';
// import Link from 'next/link';
import styles from '@styles/components/layout.module.scss';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

// HOC to add layouts to all pages
export default ({ children, currentPage }) => (
  <div className={styles.page}>
    <Head>
      <title>Alex Chao</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet" />
    </Head>
    <NavBar currentPage={currentPage} />
    {/* render the wrapped children (HOC) */}
    <main className={styles.mainContent}>{children}</main>
    <Footer />
  </div>
);
