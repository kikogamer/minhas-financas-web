import React from 'react';
import Button from '../Button';
import FormField from '../FormField';
import ContactForm from './styles';

const Contato = () => (
  <ContactForm>
    <form>
      <ContactForm.Title>Contato</ContactForm.Title>
      <FormField label="Nome" name="name" />
      <FormField label="Email" name="email" type="email" />
      <FormField label="Mensagem" name="message" type="textarea" />
      <ContactForm.Enviar>
        <Button type="button" large>Enviar Contato</Button>
      </ContactForm.Enviar>
    </form>
  </ContactForm>
);

export default Contato;
