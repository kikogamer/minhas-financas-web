import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { api, GetApiError } from '../../services/api';
import LoadingContext from '../../contexts/LoadingContext';
import setFormErrors from '../../services/errors';
import login from '../../services/auth';

const SignIn = () => {
  const {
    errors, handleSubmit, register, setError,
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const history = useHistory();

  const OnSubmit = (data) => {
    setShowAlert(false);
    showLoading('Entrando...');

    const params = { auth: data };

    api.post('/user_token', params)
      .then((response) => {
        login(response.data.jwt);
        history.push('/dashboard');
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setValidationMessage('Houve um problema com o login, verifique suas credenciais.');
          setShowAlert(true);
        } else {
          const responseError = GetApiError(error);
          if (responseError.validationError) {
            setFormErrors(responseError.messages, setError);
          } else {
            setValidationMessage(responseError.messages.join(','));
            setShowAlert(true);
          }
        }
      })
      .finally(() => hideLoading());
  };

  return (
    <PageDefault>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>{validationMessage}</Alert>}
      <FormContainer>
        <form onSubmit={handleSubmit(OnSubmit)} noValidate>
          <FormContainer.Title>Entrar</FormContainer.Title>
          <FormContainer.Fields>
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
          </FormContainer.Fields>
          <FormContainer.Enviar>
            <Button type="submit" large>Entrar</Button>
          </FormContainer.Enviar>
        </form>
      </FormContainer>
    </PageDefault>
  );
}

export default SignIn;
