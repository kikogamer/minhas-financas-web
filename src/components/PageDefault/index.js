import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Main from './styles';

const PageDefault = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
