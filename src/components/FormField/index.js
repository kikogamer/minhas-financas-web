import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from './styles';

const FormField = ({ label, name, type }) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label>
        <Label.Text>
          {label}
          :
        </Label.Text>
        <Input as={tag} type={type} id={name} name={name} />
      </Label>
    </FormFieldWrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
