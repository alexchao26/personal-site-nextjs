import styles from '@styles/pages/home.module.scss';
import techList from '@content/techList';

export default () => (
  <div className={styles.container}>
    <h1 className={styles.marginSm}>Alex Chao</h1>
    <h3 className={styles.marginSm}>Software Engineer</h3>

    {/* Tech Stack */}
    {techList.map(({ title, list }) => (
      <div key={title} className={styles.list}>
        <h5>{`${title}:`}</h5>
        <span>{list}</span>
      </div>
    ))}
  </div>
);
