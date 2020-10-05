import React from 'react';
import Contato from '../../components/Contato';
import PageDefault from '../../components/PageDefault';
import BannerMain from './components/BannerMain';
import FeatureList from './components/FeatureList';
import { FeatureLogoGrafico, FeatureLogoTaskList } from './components/FeatureList/styles';
import PageDescription from './components/PageDescription';
import ButtonLink from '../../components/ButtonLink';
import PageButtonCadastro from './components/PageButtonCadastro';

const Home = () => {
  const features = [
    {
      id: 1,
      logo: <FeatureLogoTaskList />,
      title: 'Controle de receitas e despesas rápido e fácil',
      description: 'Tenha controle total com nosso app gerenciando todas as suas entradas e saídas de sua conta e saiba onde seu dinheiro está sendo utilizado.',
    },
    {
      id: 2,
      logo: <FeatureLogoGrafico />, 
      title: 'Saiba para onde vai o seu dinheiro',
      description: 'Com nosso app você tem como analisar as suas finanças.',
    },
  ];

  return (
    <PageDefault>
      <BannerMain />
      <FeatureList features={features} />
      <PageDescription>
        O Minhas Finanças é um web app que permite o gerenciamento de receitas e despesas,
        análise dos lançamentos e categorização das receitas e despesas.
      </PageDescription>
      <PageButtonCadastro>
        <ButtonLink to="/cadastro" large>Cadastre-se</ButtonLink>
      </PageButtonCadastro>
      <Contato />
    </PageDefault>
  );
};

export default Home;
