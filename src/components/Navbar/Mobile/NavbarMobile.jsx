import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImgFile from '../../../resources/Logo.png';
import styles from './NavbarMobile.module.css';

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log('Active: ', isActive);
  }, [isActive]);

  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={styles.nav__container}>
      <div className={styles.main__section}>
        <div className={styles.img__container}>
          <img src={LogoImgFile} alt='' />
        </div>
        <div className={`${styles.burger__button} ${isActive ? styles.burger__open : ''}`} onClick={clickHandler}>
          <div className={`${styles.burger__line} ${styles.burger__line__before}`}></div>
          <div className={`${styles.burger__line} ${styles.burger__line__middle}`}></div>
          <div className={`${styles.burger__line} ${styles.burger__line__after}`}></div>
        </div>
      </div>
      <div
        className={`${styles.menu__container} ${
          isActive ? styles.dropdown__active : ''
        } __upper`}>
        <ul>
          <li>
            {/* <i className='fa-solid fa-house-chimney'></i> */}
            <Link to={'/'}>inicio</Link>
          </li>
          <li>
            {/* <i className='fa-solid fa-book-open'></i> */}
            <Link to={'blog'}>blog</Link>
          </li>
          <li>
            {/* <i className='fa-solid fa-heart'></i> */}
            <Link to={'life'}>mi vida</Link>
          </li>
          <li>
            {/* <i className='fa-solid fa-briefcase'></i> */}
            <Link to={'portfolio'}>portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
