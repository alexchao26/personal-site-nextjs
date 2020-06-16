import styles from '@styles/pages/about.module.scss';
import OptimizedImage from '@components/OptimizedImage';

const list = [
  'Native New Yorker',
  'Climber, Cyclist, Anything Outdoors',
  'Cheeseburger Enthusiast',
  'Chemistry Nerd',
];

export default () => (
  <div className={styles.container}>
    <h1 className={`${styles.marginSm} ${styles.secondary}`}>Alex Chao</h1>
    <OptimizedImage
      src="silly.jpg"
      className={`${styles.borderCircle} ${styles.marginMd}`}
      alt="Alex"
    />
    <ul className={styles.list}>
      {list.map((e) => <p key={e}>{e}</p>)}
    </ul>
  </div>
);
