import { Link } from 'react-router-dom';
import LogoImgFile from '../../../resources/Logo.png';
import Topbar from '../../Topbar/Topbar';
import styles from './NavbarDesktop.module.css';

const NavbarDesktop = () => {
  return (
    <>
      <div className='topbar'>
        <Topbar />
      </div>
      <nav className={styles.nav__container}>
        <div className={styles.section__left}>
          <img src={LogoImgFile} alt='Logo Tincho' />
        </div>
        <div className={`${styles.section__right} __upper`}>
          <ul>
            <li>
              <i className='fa-solid fa-house-chimney'></i>
              <Link to={'/'}>inicio</Link>
            </li>
            <li>
              <i className='fa-solid fa-book-open'></i>
              <Link to={'blog'}>blog</Link>
            </li>
            <li>
              <i className='fa-solid fa-heart'></i>
              <Link to={'life'}>mi vida</Link>
            </li>
            <li>
              <i className='fa-solid fa-briefcase'></i>
              <Link to={'portfolio'}>portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarDesktop;
