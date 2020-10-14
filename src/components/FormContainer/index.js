import styled from 'styled-components';
import Card from '../Card';

const FormContainer = styled(Card)`
  background: #ececec;
  border: 1px solid var(--secondary);
  
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 10px 10px 40px;
  
  @media screen and (min-width: 0) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
  }  
`;

FormContainer.Enviar = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

FormContainer.Title = styled.h3`
  color: var(--secondary);
  font-weight: bold;
  margin-bottom: 10px;
  padding: 10px 0;
  text-align: center;
  
  @media screen and (min-width: 0) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;

export default FormContainer;
