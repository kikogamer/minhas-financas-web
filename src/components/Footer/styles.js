import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--primary);
  border-top: 2px solid var(--secondary);
  color: var(--white);
  text-align: center;
  
  @media screen and (min-width: 0) {
    font-size: 1em;
    padding: 16px 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    padding: 32px 16px;
  }
`;

export default FooterContainer;
