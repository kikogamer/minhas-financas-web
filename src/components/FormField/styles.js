import styled from 'styled-components';

export const FormFieldWrapper = styled.div`  
  textarea {
    min-height: 150px;
  }
`;

export const Input = styled.div`
  display: flex;
`;

Input.Container = styled.div`
  margin-bottom: 20px;
  margin-top: 5px;
  width: 100%;
`;

Input.ErrorMessage = styled.span`
  color: #595959;
  font-size: 1.2em;
  font-weight: 400;
  font-family: Roboto;
  font-style: italic;
  letter-spacing: 0.03333em;
`;

Input.Field = styled.input`
  background: var(--white);
  color: var(--secondary);
  display: block;
  font-size: 18px;
  height: 57px;
  width: 100%;
  
  outline: 0;
  border: 0;
    
  margin-bottom: 5px;
  padding: 0 16px;
  
  resize: none;
  border-radius: 4px;

  ${(props) => (props.hasError && 'border: 1px solid var(--danger); box-shadow: 0 0 0.3em var(--danger);')}
  
  &:invalid {
    box-shadow: none;
  }

  &:-moz-submit-invalid {
    box-shadow: none;
  }

  &:-moz-ui-invalid {
    box-shadow:none;
  }
`;

Input.IconError = styled.div`
  color: var(--danger);
  min-width: 48px;
  padding: 15px 10px;
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
