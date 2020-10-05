import styled from 'styled-components';

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

Card.Content = styled.div`
  padding: 2px 16px;
`;

export default Card;
