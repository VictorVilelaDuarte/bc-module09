import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Digite seu nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail obrigatorio'),
  password: Yup.string()
    .min(6, 'Digite no mínimo 6 caracteres')
    .required('Digite uma senha'),
});

export default function SingUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="goBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit"> Criar conta </button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
