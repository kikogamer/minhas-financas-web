import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserInfoContext from '../../contexts/UserInfoContext';
import { logout } from '../../services/auth';
import ButtonLink from '../ButtonLink';
import DropDown from '../DropDown';
import DropDownItem from '../DropDown/components/DropDownItem';
import DropDownMenu from '../DropDown/components/DropDownMenu';
import DropDownToggle from '../DropDown/components/DropDownToggle';
import HeaderContainer from './styles';

const Header = () => {
  const history = useHistory();
  const { isLoggedIn, userInfo } = useContext(UserInfoContext);

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
                    <Link to="/excluir-conta">Excluir Conta</Link>
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
