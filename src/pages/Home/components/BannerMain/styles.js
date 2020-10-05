import styled from 'styled-components';
import Card from '../../../../components/Card';

const BannerMainCard = styled(Card)`
  background: var(--secondary);
  color: var(--white);
`;

BannerMainCard.Content = styled.p`

  color: rgba(253, 253, 253, 0.75);
  font-family: Roboto;
  font-style: italic;
  text-align: center;
  
  @media screen and (min-width: 0) {
    font-size: 0.8em;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.2em;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 992px) {
    font-size: 2.7em;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3.3em;
    padding-bottom: 100px;
  }
`;

BannerMainCard.Title = styled.h2`
  color: var(--white);
  font-family: Pacifico;
  text-align: center;
  
  @media screen and (min-width: 0) {
    font-size: 1em;
    padding: 25px 4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
    padding: 50px 8px;
  }

  @media screen and (min-width: 992px) {
    font-size: 3em;
    padding: 70px 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3.7em;
    padding: 100px 16px;
  }
`;

export default BannerMainCard;
