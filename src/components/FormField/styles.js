import styled from 'styled-components';

export const FormFieldWrapper = styled.div`  
  textarea {
    min-height: 150px;
  }
`;

export const Input = styled.input`
  background: var(--white);
  color: var(--secondary);
  display: block;
  font-size: 18px;
  height: 57px;
  width: 100%;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--secondary);
  
  padding: 0 16px;
  margin-bottom: 20px;
  margin-top: 5px;
  
  resize: none;
  border-radius: 4px;

  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
`;

export const Label = styled.label`
  
`;

Label.Text = styled.span`
  color: var(--secondary);
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  
  transition: .1s ease-in-out;
`;
