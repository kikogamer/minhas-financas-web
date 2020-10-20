import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Page404Container from './styles';

const Page404 = () => (
  <PageDefault>
    <Page404Container>
      <Page404Container.Title>Ops, quebrou tudo :)</Page404Container.Title>
      <Page404Container.Link>
        <Link to="/">Você pode jogar ou voltar pra home :)</Link>
      </Page404Container.Link>
      <iframe
        title="Flappy Bird Game"
        src="https://kikogamer.github.io/flappybird-js/"
        width="320px"
        height="480"
        scrolling="no"
      />
    </Page404Container>
  </PageDefault>
);

export default Page404;
