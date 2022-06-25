import styles from './ArticleMinified.module.css';
import articelImg from '../../resources/article1.jpg';
import { Link } from 'react-router-dom';

const ArticleMinified = (props) => {
  return (
    <Link to={'#'}>
      <article className={styles.article__container}>
        <div className={styles.post__thumb}>
          <img src={articelImg} alt='' />
        </div>
      </article>
    </Link>
  );
};

export default ArticleMinified;
