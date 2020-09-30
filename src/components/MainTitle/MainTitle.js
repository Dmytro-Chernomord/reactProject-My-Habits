import React from 'react';
// import s from './mainTitle.module.css';

export default function MainTitle({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
