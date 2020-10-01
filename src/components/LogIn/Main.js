import React from 'react';

import s from './Main.module.css';

export default function Authorization() {
  return (
    <div className={s.div}>
      <h1>«Курение ослабляет силу мысли и делает неясным её выражение».</h1>
      <sup>Л.Н.Толсой</sup>
      <h2>Добро пожаловать!</h2>
      <p>
        Войдите или зарегистрируйтесь, чтобы начать использовать наше приложение
      </p>
    </div>
  );
}
