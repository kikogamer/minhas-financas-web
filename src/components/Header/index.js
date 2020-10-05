import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../ButtonLink';
import { HeaderContainer, HeaderLink, HeaderTitle } from './styles';

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderTitle>Minhas Finanças</HeaderTitle>
    </Link>
    <div>
      <ButtonLink to="/cadastro">Cadastre-se</ButtonLink>
      <HeaderLink to="/entrar">Entrar</HeaderLink>
    </div>
  </HeaderContainer>
);

export default Header;
