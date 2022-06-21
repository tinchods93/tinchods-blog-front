/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import profilePic from '../../resources/profilepic.jpg';
import styles from './AboutMeFloater.module.css';

const AboutMeFloater = () => {
  return (
    <div
      className={`flex__container__centered ${styles.aboutme__floater__container}`}>
      <div className={styles.header}>
        <h3>Hey, I'm Martin!!</h3>
      </div>
      <div className={styles.top}>
        <div className={styles.profile__img__container}>
          <img src={profilePic} alt='' />
        </div>
        <p>
          My favorite thing in life is time spent around the table. And all the
          better with some seriously tasty food to bring us all together.
        </p>
      </div>
      <div className={styles.bot}>
        <Link to={"/life"}>más acerca de mí {">>"}</Link>
      </div>
    </div>
  );
};

export default AboutMeFloater;
