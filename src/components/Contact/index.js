import React from 'react';
import Button from '../Button';
import FormContainer from '../FormContainer';
import FormField from '../FormField';

const Contact = () => (
  <FormContainer>
    <form>
      <FormContainer.Title>Contato</FormContainer.Title>
      <FormField label="Nome" name="name" />
      <FormField label="Email" name="email" type="email" />
      <FormField label="Mensagem" name="message" type="textarea" />
      <FormContainer.Enviar>
        <Button type="button" large>Enviar Contato</Button>
      </FormContainer.Enviar>
    </form>
  </FormContainer>
);

export default Contact;
