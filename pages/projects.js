import projectsContent from '@content/projects';
import styles from '@styles/pages/projects.module.scss';

export default () => (
  <div className={styles.container}>
    {projectsContent.map(({ name }) => (
      <p key={name}>{name}</p>
    ))}
  </div>
);
