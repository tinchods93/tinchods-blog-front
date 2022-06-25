import { Link } from 'react-router-dom';
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail.component';
import styles from './LastArticlesByCategory.module.css';

const LastArticlesByCategory = () => {
  const articles = [
    <ArticleThumbnail />,
    <ArticleThumbnail />,
    <ArticleThumbnail />,
  ];
  return (
    <section className='wrapper'>
      <div className={styles.container}>
        <div className={styles.list__wrapper}>
          <div className={styles.header}>
            <Link to={'#'} className='__upper'>
              <h4 className='__upper'>{'<categoria>'}</h4>
            </Link>
          </div>
          <div className={styles.content}>{articles}</div>
        </div>
        <div className={styles.list__wrapper}>
          <div className={styles.header}>
            <Link to={'#'} className='__upper'>
              <h4 className='__upper'>{'<categoria>'}</h4>
            </Link>
          </div>
          <div className={styles.content}>{articles}</div>
        </div>
        <div className={styles.list__wrapper}>
          <div className={styles.header}>
            <Link to={'#'} className='__upper'>
              <h4 className='__upper'>{'<categoria>'}</h4>
            </Link>
          </div>
          <div className={styles.content}>{articles}</div>
        </div>
      </div>
    </section>
  );
};
export default LastArticlesByCategory;
