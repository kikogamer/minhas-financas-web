import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';
import { api, GetApiError } from '../../services/api';
import setFormErrors from '../../services/errors';
import LoadingContext from '../../contexts/LoadingContext';
import { login } from '../../services/auth';

const SignUp = () => {
  const {
    errors, getValues, handleSubmit, register, setError,
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const history = useHistory();
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const OnSubmit = (data) => {
    setShowAlert(false);
    showLoading('Criando usuário...');

    const params = { user: data };

    api.post('/users', params)
      .then((response) => {
        login(response.data.jwt);
        history.push('/dashboard');
      })
      .catch((error) => {
        const responseError = GetApiError(error);
        if (responseError.validationError) {
          setFormErrors(responseError.messages, setError);
        } else {
          setValidationMessage(responseError.messages.join(','));
          setShowAlert(true);
        }
      })
      .finally(() => hideLoading());
  };

  return (
    <PageDefault>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>{validationMessage}</Alert>}
      <FormContainer>
        <form onSubmit={handleSubmit(OnSubmit)} noValidate>
          <FormContainer.Title>Criar Conta</FormContainer.Title>
          <FormContainer.Fields>
            <FormField
              label="Nome"
              name="name"
              errors={errors}
              register={register}
              autoFocus
              required
            />
            <FormField
              label="Email"
              name="email"
              errors={errors}
              register={register}
              type="email"
              required
            />
            <FormField
              label="Senha"
              name="password"
              errors={errors}
              register={register}
              type="password"
              minLength={8}
              maxLength={72}
              required
            />
            <FormField
              label="Confirmação de Senha"
              name="password_confirmation"
              errors={errors}
              register={register}
              type="password"
              minLength={8}
              maxLength={72}
              required
              validate={(value) => {
                const { password } = getValues();
                return password === value || 'Confirmação de Senha deve ser igual a Senha.';
              }}
            />
          </FormContainer.Fields>
          <FormContainer.Enviar>
            <Button type="submit" large>Criar Conta</Button>
          </FormContainer.Enviar>
        </form>
      </FormContainer>
    </PageDefault>
  );
};

export default SignUp;
