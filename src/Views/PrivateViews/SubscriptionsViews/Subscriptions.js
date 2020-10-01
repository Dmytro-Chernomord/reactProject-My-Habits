import React from 'react';
import Header from '../../../components/Header/Header';
import style from './Subscriptions.module.css';
import Button from '../../../components/UIcomponents/Button/Button';
import Payments from '../../../components/Payment/Payment';

const Subscriptions = () => {
  return (
    <>
      <Header title="Подписки" />
      <div className={style.div}>
        <h2 className={style.header}>Тип подписки</h2>

        <div className={style.subscribe}>
          <button type="button" className={style.btnNoob}>
            Noob
          </button>
          <p className={style.color}> 30 дней — $4.99</p>
        </div>
        <div className={style.subscribe}>
          <button type="button" className={style.btnBasic}>
            Basic
          </button>
          <p className={style.color}>
            1 месяц — $4.80 <span className={style.span}>- 3%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button type="button" className={style.btnStandart}>
            Standart
          </button>
          <p className={style.color}>
            3 месяца — $14.20 <span className={style.span}>- 5%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button type="button" className={style.btnPremium}>
            Premium
          </button>
          <p className={style.color}>
            6 месяцев — $27.84 <span className={style.span}>- 7%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button type="button" className={style.btnUltra}>
            Ultra
          </button>
          <p className={style.color}>
            312 месяцев — $53.89 <span className={style.span}>- 10%</span>
          </p>
        </div>

        <div className={style.position}>
          <Button type="button" label="Изменить подписку" />
        </div>
      </div>
      <Payments />
    </>
  );
};
export default Subscriptions;
