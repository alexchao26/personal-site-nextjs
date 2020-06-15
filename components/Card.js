import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from '@styles/components/Card.module.scss';

export default ({
  name,
  image,
  description,
  website,
  websiteName,
  websiteImage,
  githubOwner,
  githubRepo,
  className,
}) => { // eslint-disable-line
  return (
    <section className={`${styles.card} ${styles[className]}`}>
      {image && (
      <img
        src={image}
        alt={name}
        className={styles.topImage}
      />
      )}
      <article className={styles.cardBottom}>
        <a
          href={website}
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.cardTitle} ${styles.secondary}`}
        >
          <h2 className={styles.noMargin}>{name}</h2>
        </a>
        <p className={styles.description}>{description}</p>
        {website && websiteName
          && (
          <section className={styles.websiteButton}>
            <a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              className={`${styles.flexRow} ${styles.websiteColor}`}
            >
              {websiteImage && <img src={websiteImage} alt={name} className={styles.websiteImage} />}
              <span className={`${styles.websiteNames} ${styles.websiteColor}`}>{websiteName}</span>
            </a>
          </section>
          )}
        {githubRepo && githubOwner
        && (
          <section className={styles.websiteButton}>
            <a
              href={`https://github.com/${githubOwner}/${githubRepo}`}
              target="_blank"
              rel="noreferrer noopener"
              className={`${styles.flexRow} ${styles.websiteColor}`}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.websiteImage}
              />
              <span className={`${styles.websiteNames} ${styles.websiteColor}`}>Github Repo</span>
            </a>
          </section>
        )}
      </article>
    </section>
  );
};
