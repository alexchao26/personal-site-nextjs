/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Link from 'next/link';
import { navContent } from '@components/NavBar';
import BeakerSvg from '@components/BeakerSvg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from '@styles/components/MobileNavBar.module.scss';

const MobileNavBar = ({ currentPage }) => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <div className={styles.container}>
      {/* Menu section hamburger and NYC svg */}
      <div className={styles.hamburger}>
        {/* Chemistry Beaker Logo :) to return on home screen */}
        <Link href="/" passHref>
          <a>
            <BeakerSvg className={styles.logo} />
          </a>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => toggleMenu(true)}
        />
      </div>
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.openMenu : ''}`}>
        <div className={styles.menuContents}>
          {/* close button */}
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.closeMenu}
            onClick={() => toggleMenu(false)}
          />

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
