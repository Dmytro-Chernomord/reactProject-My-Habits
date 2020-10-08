import React from 'react';
import s from './button.module.css';
export default function Button({ text, variety }) {
  return <button className={s[variety]}>{text}</button>;
}
