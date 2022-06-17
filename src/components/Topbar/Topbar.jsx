import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopbarStyle = styled.div`
  /* background: brown; */
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0101012d;
`;
const TopbarList = styled.ul`
  display: flex;
  list-style-type: none;
  text-transform: uppercase;
  padding: 5px;
  gap: 15px;
`;
const TopbarListItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #757575;
  }
`;

const SocialMediaIconContainer = styled.div`
  background: #101031;
  padding: 5px;
  border-radius: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #101031;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #757575;
    background: #757575;
  }
`;

const Topbar = () => {
  return (
    <TopbarStyle>
      <TopbarList>
        <TopbarListItem>inicio</TopbarListItem>
        <TopbarListItem>blog</TopbarListItem>
        <TopbarListItem>mi vida</TopbarListItem>
        <TopbarListItem>portafolio</TopbarListItem>
        <SocialMediaIconContainer>
          <i className='fa-brands fa-facebook-f'></i>
        </SocialMediaIconContainer>
        <SocialMediaIconContainer>
          <i className='fa-brands fa-linkedin-in'></i>
        </SocialMediaIconContainer>
      </TopbarList>
    </TopbarStyle>
  );
};

export default Topbar;
