import React from 'react';
import PropTypes from 'prop-types';
import { FeatureListContainer, FeatureCard } from './styles';

const FeatureList = ({ features }) => (
  <FeatureListContainer>
    {features.map((feature) => (
      <FeatureCard key={feature.id}>
        <FeatureCard.Header>
          {feature.logo}
          <FeatureCard.Title>{feature.title}</FeatureCard.Title>
        </FeatureCard.Header>
        <FeatureCard.Content>
          {feature.description}
        </FeatureCard.Content>
      </FeatureCard>
    ))}
  </FeatureListContainer>
);

FeatureList.propTypes = {
  features: PropTypes.instanceOf(Array),
};

FeatureList.defaultProps = {
  features: [],
};

export default FeatureList;
