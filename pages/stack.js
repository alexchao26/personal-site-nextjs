import styles from '@styles/pages/stack.module.scss';
import Layout from '@components/layout';
import techList from '@content/techList';

export default () => (
  <Layout currentPage="stack">
    <div className={styles.container}>
      <h2>My Stack</h2>
      {techList.map(({ title, list }) => (
        <div key={title} className={styles.list}>
          <h5>{`${title}:`}</h5>
          <span>{list}</span>
        </div>
      ))}
    </div>
  </Layout>
);
