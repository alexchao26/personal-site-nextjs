import styles from '@styles/pages/about.module.scss';
import Layout from '@components/layout';

export default () => (
  <Layout>
    <div className={styles.container}>
      <section className={styles.column}>
        <h2>Alex Chao</h2>
        <div>Fullstack Software Engineer</div>
      </section>
    </div>
  </Layout>
);
