import ArticlePreview from '../ArticlePreview/ArticlePreview.component';
import styles from './LastPosts.module.css';

const LastPosts = () => {
  const articles = [
    <ArticlePreview />,
    <ArticlePreview />,
    <ArticlePreview />,
    <ArticlePreview />,
  ];
  return (
    <section className='wrapper'>
      <div className={`${styles.header} __upper`}>
        <h4>últimos posts de {'{categoria}'}</h4>
      </div>
      <div className={styles.posts__grid}>{articles}</div>
    </section>
  );
};

export default LastPosts;
