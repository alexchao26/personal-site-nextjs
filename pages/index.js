// import Head from 'next/head';
// import Link from 'next/link';
import Layout from '@components/layout';
import styles from '@styles/pages/home.module.scss';

// This is the default landing page -> '/'
export default () => (
  <Layout currentPage="home">
    <div className={styles.container}>
      <h1 className={styles.center}>Alex Chao</h1>
      <img src="/images/alex.jpg" className={`${styles.borderCircle} ${styles.center}`} alt="Alex" />
      <p>Native New Yorker</p>
      <p>Rock Climber</p>
      <p>Cheeseburger Enthusiast</p>
    </div>
  </Layout>
);
