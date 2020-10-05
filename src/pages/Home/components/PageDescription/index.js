import styled from 'styled-components';

const PageDescription = styled.p`
  color: #767676;
  font-family: Roboto;
  font-style: italic;
  margin: 15px 0;
  padding: 0 10px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  @media screen and (min-width: 0) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }

  @media screen and (min-width: 992px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3em;
  }
`;

export default PageDescription;
