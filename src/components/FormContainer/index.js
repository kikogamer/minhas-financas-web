import styled from 'styled-components';
import Card from '../Card';

const FormContainer = styled(Card)`
  background: #ececec;
  border: 1px solid var(--secondary);
  
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  
  @media screen and (min-width: 0) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
  }  
`;

FormContainer.Alert = styled.span`
  color: var(--danger);
  display: inline-block;
  font-weight: bold;
  padding-bottom: 30px;
  text-align: center;
  width: 100%;
  
  @media screen and (min-width: 0) {
    font-size: 0.655em;
  }

  @media screen and (min-width: 768px) {
    font-size: 0.9em;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.2em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.45em;
  }
`;

FormContainer.Fields = styled.div`
  padding-left: 40px;
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
    font-size: 1.75em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`;

export default FormContainer;
