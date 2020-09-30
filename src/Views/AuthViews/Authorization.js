import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Authorization.module.css';
import Button from '../../components/Button/Button';

import routes from '../../routes';

export default function Authorization() {
  return (
    <div className={s.div}>
      <h1>«Курение ослабляет силу мысли и делает неясным её выражение».</h1>
      <sup>Л.Н.Толсой</sup>
      <h2>Добро пожаловать!</h2>
      <p>
        Войдите или зарегистрируйтесь, чтобы начать использовать наше приложение
      </p>

      <NavLink to={routes.login}>
        <Button text="Login" variety="login" />
      </NavLink>
      <NavLink to={routes.register}>
        <Button text="Registration" variety="green" />
      </NavLink>
    </div>
  );
}
