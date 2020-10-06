import React from 'react';
import s from './Layout.module.css';

const Container = ({ children, width, sections }) => (
  <>
    {sections === 'sides' && <div className={s.sides}>{children}</div>}
    {sections === 'middle' && <div className={s.middle}>{children}</div>}
    {!sections && (
      <div style={{ minWidth: width, display: 'flex' }}>{children}</div>
    )}
  </>
);

export default Container;
