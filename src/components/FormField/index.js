import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FormFieldWrapper, Input, Label } from './styles';

const FormField = ({
  autoFocus, errors, label, maxLength, minLength, name, register, required, type, validate,
}) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasError = errors && errors[name];
  const errorMessage = hasError && errors[name].message;
  const propsValidation = {
    ...(required && { required: `Preencha o campo ${label}` }),
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `${label} deve ter no mínimo ${minLength} caracteres.`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `${label} deve ter no máximo ${maxLength} caracteres.`,
      },
    }),
    ...(type.toLowerCase() === 'email' && {
      pattern: {
        value: /\S@\S/,
        message: 'Formato de email inválido.',
      },
    }),
    ...(validate && { validate }),
  };

  return (
    <FormFieldWrapper>
      <Label>
        <Label.Text>
          {label}
        </Label.Text>
        <Input>
          <Input.Container>
            <Input.Field
              as={tag}
              type={type}
              hasError={hasError}
              id={name}
              name={name}
              ref={register(propsValidation)}
              autoFocus={autoFocus}
            />
            {(hasError && <Input.ErrorMessage>{errorMessage}</Input.ErrorMessage>)}
          </Input.Container>
          <Input.IconError>
            {(hasError && <FontAwesomeIcon icon={faExclamationCircle} size="2x" />)}
          </Input.IconError>
        </Input>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  autoFocus: false,
  errors: null,
  maxLength: null,
  minLength: null,
  register: () => {},
  required: false,
  type: 'text',
  validate: null,
};

FormField.propTypes = {
  autoFocus: PropTypes.bool,
  errors: PropTypes.instanceOf(Object),
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  validate: PropTypes.func,
};

export default FormField;
