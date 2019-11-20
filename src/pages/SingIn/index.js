import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="goBarber" />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit"> Acessar </button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
