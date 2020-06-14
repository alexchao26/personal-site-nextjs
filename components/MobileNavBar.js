/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Link from 'next/link';

import { navContent } from '@components/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from '@styles/components/MobileNavBar.module.scss';

const MobileNavBar = ({ currentPage }) => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <div className={styles.container}>
      {/* hamburger menu icon */}
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
          {/* close button */}
          <div
            role="button"
            tabIndex={0}
            className={styles.closeMenu}
            onClick={() => toggleMenu(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>

          {/* Nav Links */}
          {navContent.map(({ link, text }) => (
            <Link key={text} href={link}>
              <a
                role="button"
                tabIndex={0}
                className={currentPage === link ? styles.currentPage : ''}
                onClick={() => toggleMenu(false)}
              >
                {text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
