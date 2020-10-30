import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  position: fixed;
  justify-content: space-between;
  left: 0;
  padding-left: 2%;
  padding-right: 2%;
  rigth: 0;
  top: 0;
  width: 100%;
    
  @media screen and (min-width: 0) {
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    height: 80px;    
  }
`;

HeaderContainer.Link = styled(Link)`
  font-weight: bold;
  margin: 10px;

  @media screen and (min-width: 0) {
    font-size: 0.5em;
  }

  @media screen and (min-width: 768px) {
    font-size: 1em;
  }

  &:hover {
    text-decoration: underline;
  }
`;

HeaderContainer.Title = styled.h1`
  font-weight: bold;

  @media screen and (min-width: 0) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;

HeaderContainer.UserInfo = styled.div`
`;

export default HeaderContainer;
