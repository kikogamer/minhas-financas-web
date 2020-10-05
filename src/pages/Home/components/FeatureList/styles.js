import styled from 'styled-components';
import Card from '../../../../components/Card';
import { ReactComponent as LogoTaskList } from '../../../../assets/img/lista-de-controle.svg';
import { ReactComponent as LogoGrafico } from '../../../../assets/img/grafico.svg';

export const FeatureCard = styled(Card)`
  border: 1px solid var(--secondary);
  color: var(--secondary);
  font-family: Roboto;
  margin: 5px 0;

  @media screen and (min-width: 0) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 49%;
  }
`;

FeatureCard.Content = styled.p`
  @media screen and (min-width: 0) {
    font-size: 1em;
    padding: 20px 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    padding: 40px 20px;
  }
`;

FeatureCard.Header = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  padding: 0 10px;
  text-align: center;

  @media screen and (min-width: 0) {
    font-size: 1.2em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;

FeatureCard.Title = styled.h3`
  width: 100%;
`;

export const FeatureListContainer = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  
  @media screen and (min-width: 0) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FeatureLogoTaskList = styled(LogoTaskList)`
  @media screen and (min-width: 0) {
    height: 90px;
    width: 125px;
  }

  @media screen and (min-width: 768px) {
    height: 120px;
    width: 150px;
  }
`;

export const FeatureLogoGrafico = styled(LogoGrafico)`
  height: 90px;
  padding-right: 10px;
  padding-top: 5px;
  width: 90px;
`;
