import Link from 'next/link';
import BeakerSvg from '@components/BeakerSvg';

import styles from '@styles/components/NavBar.module.scss';

export const navContent = [
  {
    link: '/',
    text: 'Home',
  }, {
    link: '/about',
    text: 'About Me',
  }, {
    link: '/projects',
    text: 'Projects',
  }, {
    link: '/articles',
    text: 'Articles',
  },
];

const NavBar = ({ currentPage }) => (
  <div className={styles.container}>
    {/* Logo SVG to return to home page */}
    <Link href="/">
      <a className={styles.noMargin}>
        <BeakerSvg className={styles.logo} />
      </a>
    </Link>

    {navContent.map(({ link, text }) => (
      <Link key={text} href={link}>
        <a className={currentPage === link ? styles.currentPage : ''}>
          {text}
        </a>
      </Link>
    ))}
  </div>
);

export default NavBar;
