import articlesContent from '@content/articles';
import Card from '@components/Card.js';
// reuse styles from projects
import styles from '@styles/pages/articles.module.scss';

export default () => (
  <div className={`${styles.container} ${styles.oneCol}`}>
    {articlesContent.map((props) => (
      <Card key={props.name} {...props} />
    ))}
  </div>
);
