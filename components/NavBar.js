import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import styles from '@styles/components/NavBar.module.scss';

const highlightColor = 'orange';
const primaryColor = '#d3d3d3';

const NavBar = ({ currentPage }) => (
  <div className={styles.container}>
    {/* Home
        NOTE: passHref prop is for Links w/ anchor tags that wrap nested components
      */}
    <Link href="/" passHref>
      <a>
        <FontAwesomeIcon
          icon={faHome}
          size="sm"
          style={{ color: currentPage === 'home' ? highlightColor : primaryColor }}
        />
      </a>
    </Link>

    {/* About Me */}
    <Link href="/stack">
      <a style={{ color: currentPage === 'stack' ? highlightColor : primaryColor }}>
        Stack
      </a>
    </Link>

    {/* Projects */}
    <Link href="/projects">
      <a style={{ color: currentPage === 'projects' ? highlightColor : primaryColor }}>
          Projects
      </a>
    </Link>

    {/* Articles */}
    <Link href="/articles">
      <a style={{ color: currentPage === 'articles' ? highlightColor : primaryColor }}>
          Articles
      </a>
    </Link>

    {/* Contact Me */}
    <Link href="/contact">
      <a style={{ color: currentPage === 'contact' ? highlightColor : primaryColor }}>
          Contact Me
      </a>
    </Link>
  </div>
);

export default NavBar;
