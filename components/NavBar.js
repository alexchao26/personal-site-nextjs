import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/NavBar.module.scss';

const NavBar = (props) => (
  <div className={styles.container}>
    {/* Home
        NOTE: passHref prop is for Links w/ anchor tags that wrap nested components
    */}
    <Link href="/" passHref>
      <a>
        <FontAwesomeIcon icon={faHome} />
      </a>
    </Link>

    {/* About Me */}
    <Link href="/about">
      <a>About Me</a>
    </Link>

    {/* Projects */}
    <Link href="/projects">
      <a>Projects</a>
    </Link>

    {/* Articles */}
    <Link href="/articles">
      <a>Articles</a>
    </Link>

    {/* Contact Me */}
    <Link href="/contact">
      <a>Contact Me</a>
    </Link>
  </div>
);

export default NavBar;
