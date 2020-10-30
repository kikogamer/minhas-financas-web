import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, logout } from '../../services/auth';
import getUserInfo from '../../services/user';
import ButtonLink from '../ButtonLink';
import DropDown from '../DropDown';
import DropDownItem from '../DropDown/components/DropDownItem';
import DropDownMenu from '../DropDown/components/DropDownMenu';
import DropDownToggle from '../DropDown/components/DropDownToggle';
import HeaderContainer from './styles';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();
  const isLoggedIn = isAuthenticated();

  async function updateUserInfo() {
    const user = await getUserInfo();
    setUserInfo(user);
  }

  useEffect(() => {
    if (isLoggedIn) {
      updateUserInfo();
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderContainer.Title>Minhas Finanças</HeaderContainer.Title>
      </Link>
      <>
        {
          isLoggedIn
            ? (
              <DropDown>
                <DropDownToggle>{userInfo && userInfo.name}</DropDownToggle>
                <DropDownMenu>
                  <DropDownItem>
                    <Link to="/profile">Alterar Profile</Link>
                  </DropDownItem>
                  <DropDownItem divider />
                  <DropDownItem onClick={handleLogout}>
                    Sair
                  </DropDownItem>
                </DropDownMenu>
              </DropDown>
            )
            : (
              <div>
                <HeaderContainer.Link to="/entrar">Entrar</HeaderContainer.Link>
                <ButtonLink to="/cadastro">Cadastre-se</ButtonLink>
              </div>
            )
        }
      </>
    </HeaderContainer>
  );
};

export default Header;
