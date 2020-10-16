import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import Loader from './styles';

const Loading = ({ loading, message }) => {
  return loading ? (
    <Loader>
      <Loader.Wrapper>
        <Spinner name="ball-spin-fade-loader" fadeIn="none" color="steelblue" />
        <Loader.Message>
          {message}
        </Loader.Message>
      </Loader.Wrapper>
    </Loader>
  ) : null;
};

Loading.defaultProps = {
  message: 'Carregando...',
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default Loading;
