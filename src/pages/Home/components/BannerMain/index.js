import React from 'react';
import Card from '../../../../components/Card';
import BannerMainCard from './styles';

const BannerMain = () => (
  <BannerMainCard>
    <Card.Content>
      <BannerMainCard.Title>
        Gerencie suas finanças de forma eficiente
      </BannerMainCard.Title>
      <BannerMainCard.Content>
        Pare de sofrer quando não sabe onde seu dinheiro vai no final do mês,
        começe agora mesmo a controlar suas finanças.
      </BannerMainCard.Content>
    </Card.Content>
  </BannerMainCard>
);

export default BannerMain;
