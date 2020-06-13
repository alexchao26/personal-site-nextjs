import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/components/Footer.module.scss';

export default () => (
  <footer className={styles.container}>
    <a
      href="https://github.com/alexchao26"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/alexmchao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </footer>
);
