import { Link } from 'react-router-dom';
import LogoImgFile from '../../resources/Logo.png';


const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={LogoImgFile} alt='' />
      </div>
      <div>
        <ul>
          <li>
            <i className='fa-solid fa-house-chimney'></i>
            <Link to={'/'}>
              inicio
            </Link>
          </li>
          <li>
            <i className='fa-solid fa-book-open'></i>
            <Link to={'blog'}>
              blog
            </Link>
          </li>
          <li>
            <i className='fa-solid fa-heart'></i>
            <Link to={'life'}>
              mi vida
            </Link>
          </li>
          <li>
            <i className='fa-solid fa-briefcase'></i>
            <Link to={'portfolio'}>
              portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
