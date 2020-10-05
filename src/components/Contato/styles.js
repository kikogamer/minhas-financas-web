import styled from 'styled-components';
import Card from '../Card';

const ContactForm = styled(Card)`
  background: rgba(12, 60, 133, 0.2);
  border: 1px solid var(--secondary);
  
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  
  @media screen and (min-width: 0) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
  }  
`;

ContactForm.Enviar = styled.div`
margin-bottom: 10px;
  text-align: center;
`;

ContactForm.Title = styled.h3`
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

export default ContactForm;
