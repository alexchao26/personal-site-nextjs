import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';

import styles from '@styles/components/NavBar.module.scss';

export const highlightColor = 'orange';
export const primaryColor = '#d3d3d3';

export const navContent = [
  {
    link: '/',
    currentPageProp: 'home',
    text: 'Home',
  }, {
    link: '/about',
    currentPageProp: 'about',
    text: 'About Me',
  }, {
    link: '/projects',
    currentPageProp: 'projects',
    text: 'Projects',
  }, {
    link: '/articles',
    currentPageProp: 'articles',
    text: 'Articles',
  },
];

const NavBar = ({ currentPage }) => (
  <div className={styles.container}>
    {navContent.map(({ link, currentPageProp, text }) => (
      <Link key={text} href={link}>
        <a style={{ color: currentPage === currentPageProp ? highlightColor : primaryColor }}>
          {text}
        </a>
      </Link>
    ))}
  </div>
);

export default NavBar;
