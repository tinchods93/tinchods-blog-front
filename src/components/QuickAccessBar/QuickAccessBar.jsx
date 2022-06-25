import { Link } from 'react-router-dom';
import styles from './QuickAccessBar.module.css';

const QuickAccessBar = () => {
  return (
    <div className={`${styles.qa__container} __upper`}>
      <ul>
        <li className={styles.li}>
          <Link to={'/'}>inicio</Link>
        </li>
        <li className={styles.li}>
          <Link to={'blog'}>blog</Link>
        </li>
        <li className={styles.li}>
          <Link to={'life'}>mi vida</Link>
        </li>
        <li className={styles.li}>
          <Link to={'portfolio'}>portfolio</Link>
        </li>
        <li className={styles.socialMedia__icons}>
          <Link to={'#'}>
            <i className='fa-brands fa-linkedin'></i>
          </Link>
          <Link to={'#'}>
            <i className='fa-brands fa-github-square'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickAccessBar;
