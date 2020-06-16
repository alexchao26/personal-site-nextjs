
import styles from '@styles/pages/home.module.scss';
import techList from '@content/techList';
import OptimizedImage from '@components/OptimizedImage';

export default () => (
  <div className={styles.container}>
    <h1 className={`${styles.marginSm} ${styles.secondary}`}>Alex Chao</h1>
    <OptimizedImage
      src="alex.jpg"
      alt="Alex"
      className={`${styles.borderCircle} ${styles.marginMd}`}
    />
    <h3 className={styles.marginSm}>Software Engineer</h3>
    {/* Tech Stack */}
    {techList.map(({ title, list }) => (
      <div key={title} className={styles.list}>
        <h5 className={styles.secondary}>{`${title}:`}</h5>
        <span>{list}</span>
      </div>
    ))}
  </div>
);
