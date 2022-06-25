import { useContext } from 'react';
import NavbarDesktop from '../Navbar/Desktop/NavbarDesktop';
import NavbarMobile from '../Navbar/Mobile/NavbarMobile';

const Header = (props) => {
  const size = useContext(props.context);
  return (
    <header>
      {size && size.width > 767 ? <NavbarDesktop /> : <NavbarMobile />}
    </header>
  );
};

export default Header;
