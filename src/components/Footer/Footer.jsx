import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.socialMedia__icons}>
        <div className={styles.sm__header}>
          <span>Redes Sociales</span>
        </div>
        <div className={styles.sm__body}>
        <Link to={'#'}>
          <i className='fa-brands fa-linkedin'></i>
        </Link>
        <Link to={'#'}>
          <i className='fa-brands fa-github-square'></i>
        </Link>
        </div>
      </div>
      <p>
        <b>©2022-present Tincho's Blog.</b> <i>design by </i>
        <b>MEEE</b>
      </p>
    </footer>
  );
};

export default Footer;
