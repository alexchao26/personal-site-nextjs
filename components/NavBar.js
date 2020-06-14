import Link from 'next/link';

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
