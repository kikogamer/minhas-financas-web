import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';
import LoadingContext from '../../contexts/LoadingContext';
import UserInfoContext from '../../contexts/UserInfoContext';
import { api, GetApiError } from '../../services/api';
import { logout } from '../../services/auth';
import setFormErrors from '../../services/errors';

const SignOff = () => {
  const {
    errors, handleSubmit, register, setError,
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const { userInfo } = useContext(UserInfoContext);
  const history = useHistory();
  const emailLabel = `Digite seu email para confirmar esta operação (${userInfo.email})`;

  const OnSubmit = (params) => {
    setShowAlert(false);
    showLoading('Excluindo Conta...');

    const config = {
      url: `/users/${userInfo.id}`,
      method: 'DELETE',
      data: { user: params },
    };

    api.request(config)
      .then(() => {
        logout();
        history.push('/');
      })
      .catch((error) => {
        if (error.response && [404, 422].indexOf(error.response.status) >= 0) {
          setValidationMessage('Email ou senha não estão corretos.');
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
          <FormContainer.Title>Excluir Minha Conta</FormContainer.Title>
          <FormContainer.Alert>
            Atenção, esta operação irá remover sua conta definitivamente e
            não poderá ser desfeita.
          </FormContainer.Alert>
          <FormContainer.Fields>
            <FormField
              label="Digite sua senha"
              name="password_confirmation"
              errors={errors}
              register={register}
              type="password"
              minLength={8}
              maxLength={72}
              required
            />
            <FormField
              label={emailLabel}
              name="email_confirmation"
              errors={errors}
              register={register}
              type="email"
              required
            />
          </FormContainer.Fields>
          <FormContainer.Enviar>
            <Button type="submit" background="var(--danger)" large>Remover Conta</Button>
          </FormContainer.Enviar>
        </form>
      </FormContainer>
    </PageDefault>
  );
};

export default SignOff;
