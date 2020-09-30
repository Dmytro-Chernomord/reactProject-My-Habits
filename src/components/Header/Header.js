import { Button } from '@material-ui/core';
import React from 'react';
import s from './Header.module.css';

export default function Header({ children, title }) {
  return (
    <header>
      header
      <h1>{title}</h1>
      {children}
    </header>
  );
}
