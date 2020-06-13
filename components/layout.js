import Head from 'next/head';
// import Link from 'next/link';
import styles from '../styles/components/layout.module.scss';
import NavBar from './NavBar';
import Footer from './Footer';

// HOC to add layouts to all pages
export default ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Alex Chao</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet" />
    </Head>
    <NavBar />
    {/* render the wrapped children (HOC) */}
    <main>{children}</main>
    <Footer />
  </div>
);
