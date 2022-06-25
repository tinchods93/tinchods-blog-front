import styles from './ArticlePreview.module.css';
import articelImg from '../../resources/article1.jpg';
import { Link } from 'react-router-dom';

const ArticlePreview = (props) => {
  return (
    <article className={styles.article__container}>
      <Link to={'#'}>
        <div className={styles.article__image}>
          <img src={articelImg} alt='' />
        </div>
        <div className={`${styles.article__header} __upper`}>
          titulo del post mucho mucho mas largo
        </div>
        <div className={styles.article__extradata}>
          <div className={styles.article__date}>
            <i className='fa-regular fa-calendar'></i>
            <span id='date'>25 de Junio, 2022</span>
          </div>
          <div className={styles.article__commentsInfo}>
            <i className='fa-solid fa-comment'></i>
            <span id='commentCount'>37 comentarios</span>
          </div>
        </div>
        <div className={styles.article__description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          fugit porro nulla rem libero rerum ullam blanditiis nemo ad distinctio
          expedita, voluptatibus, magni temporibus maxime deserunt harum hic
          illo nesciunt amet mollitia facere omnis. Suscipit doloribus unde
          ipsam consectetur. Recusandae!
        </div>
        <div className={styles.fake__button}>LEER MÁS...</div>
      </Link>
    </article>
  );
};

export default ArticlePreview;
