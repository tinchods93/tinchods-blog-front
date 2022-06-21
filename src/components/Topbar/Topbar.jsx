import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>
            inicio
          </Link>
        </li>
        <li>
          <Link to={'blog'}>
            blog
          </Link>
        </li>
        <li>
          <Link to={'life'}>
            mi vida
          </Link>
        </li>
        <li>
          <Link to={'portfolio'}>
            portfolio
          </Link>
        </li>
        <div>
          <i className='fa-brands fa-facebook-f'></i>
        </div>
        <div>
          <i className='fa-brands fa-linkedin-in'></i>
        </div>
      </ul>
    </div>
  );
};

export default Topbar;
