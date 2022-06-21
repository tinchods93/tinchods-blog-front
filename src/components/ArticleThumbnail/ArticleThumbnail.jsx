import styles from './ArticleThumbnail.module.css';
import thumbnailImg from '../../resources/thumbnail.jpg';
import { Link } from 'react-router-dom';

const ArticleThumbnail = (props) => {
  return (
    <Link to={'#'}>
      <article className={styles.thumb_container}>
        <div className={styles.img__container}>
          <img src={thumbnailImg} alt='' />
        </div>
        <div className={styles.description__container}>
          <p>
            3 Meaningful Ways You Can Help Support Ukraine Right Now. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Aut odio
            provident quod dolorum dolor est tempora iusto minus fugiat impedit.
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleThumbnail;
