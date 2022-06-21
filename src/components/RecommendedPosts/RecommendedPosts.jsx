import ArticleLink from '../ArticleLink/ArticleLink';
import styles from './RecommendedPosts.module.css';

const RecommendedPosts = () => {
  const articles = [<ArticleLink />, <ArticleLink />, <ArticleLink />];
  return (
    <section className='wrapper'>
      <div className={styles.recommended__wrapper}>
        <div className='__upper'>
          <h4>Recomendados por mi</h4>
        </div>
        <div className={styles.posts__grid}>{articles}</div>
      </div>
    </section>
  );
};

export default RecommendedPosts;
