/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from '@styles/components/MobileNavBar.module.scss';

// TODO pull all links and text out into a config file so that both Mobile & Desktop Navs get the
// TODO   same contents
const MobileNavBar = () => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <div className={styles.container}>
      <div
        role="button"
        tabIndex={0}
        className={styles.hamburger}
        onClick={() => toggleMenu(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.openMenu : ''}`}>
        <div className={styles.menuContents}>
          <div
            role="button"
            tabIndex={0}
            className={styles.closeMenu}
            onClick={() => toggleMenu(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          {/* Home */}
          <Link href="/">
            <a>Home</a>
          </Link>

          {/* About Me */}
          <Link href="/stack">
            <a>Stack</a>
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
      </div>
    </div>
  );
};

export default MobileNavBar;
