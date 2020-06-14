import Layout from '@components/layout';
import styles from '@styles/pages/about.module.scss';

const list = [
  'Native New Yorker',
  'Rock Climber & Cyclist',
  'Cheeseburger Enthusiast',
  'Chemistry Nerd',
];

export default () => (
  <Layout currentPage="about">
    <div className={styles.container}>
      <h1 className={styles.marginSm}>Alex Chao</h1>
      <img
        src="/images/alex.jpg"
        className={`${styles.borderCircle} ${styles.marginMd}`}
        alt="Alex"
      />
      <ul className={styles.list}>
        {list.map((e) => <p key={e}>{e}</p>)}
      </ul>
    </div>
  </Layout>
);
