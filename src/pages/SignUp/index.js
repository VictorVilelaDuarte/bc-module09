import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="goBarber" />
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit"> Criar conta </button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}
