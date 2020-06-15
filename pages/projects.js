import projectsContent from '@content/projects';
import styles from '@styles/pages/projects.module.scss';
import Card from '@components/Card.js';

export default () => (
  <div className={styles.container}>
    {projectsContent.map((props) => (
      <Card key={props.name} {...props} />
    ))}
  </div>
);
