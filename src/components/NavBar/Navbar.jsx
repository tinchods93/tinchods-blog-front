import styled from 'styled-components';
import LogoImgFile from '../../resources/Logo.png';
const Logo = styled.div`
  width: 420px;
  height: 100%;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  /* background: lightgray; */
  padding: 5px;
  border-bottom: 4px double #0101012d;
`;
const NavigationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;    
`;

const NavigationList = styled.ul`
  display: flex;
  list-style-type: none;
  text-transform: uppercase;
  padding: 5px;
  gap: 25px;
`;
const NavigationListItem = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    font-weight:600;
    transition:.1s ease-in-out;
    cursor: pointer;
    &:hover{
        color:#757575;
    }
`;
const Icon = styled.i`
    font-size:20px;
`
const NavBar = () => {
  return (
    <NavContainer>
      <Logo>
        <LogoImg src={LogoImgFile} alt='' />
      </Logo>
      <NavigationContainer>
        <NavigationList>
          <NavigationListItem>
            <Icon className='fa-solid fa-house-chimney'></Icon>
            <span>inicio</span>
          </NavigationListItem>
          <NavigationListItem>
            <Icon className='fa-solid fa-book-open'></Icon>
            <span>blog</span>
          </NavigationListItem>
          <NavigationListItem>
            <Icon className='fa-solid fa-heart'></Icon>
            <span>mi vida</span>
          </NavigationListItem>
          <NavigationListItem>
            <Icon className='fa-solid fa-briefcase'></Icon>
            <span>portfolio</span>
          </NavigationListItem>
        </NavigationList>
      </NavigationContainer>
    </NavContainer>
  );
};

export default NavBar;
