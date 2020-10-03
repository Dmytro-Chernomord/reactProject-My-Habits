import React from 'react';
import style from './Payment.module.css';
import Button from '../UIcomponents/Button/Button';
import imgFly from '../../images/logo/Fly.svg';
import imgGirl from '../../images/logo/Girl.svg';
import AddCreditCardForm from './CreditCardAdd/CreditCardAddForm';

import Swipers from './CreditCardAdd/Swiper';

const Payment = () => {
  return (
    <>
      <div className={style.background}>
        <h2 className={style.titel}>Мои карты</h2>
        <div key={4}></div>
        <ul className={style.cardList}>
          <Swipers />
        </ul>

        <div className={style.buttons}>
          <Button type="button" label=" + Добавить карту" />
          <Button type="button" label=" Оплатить" green={true} />
        </div>
        <AddCreditCardForm />

        <div className={style.supportIcon}>
          <div className={style.iconStyle}>
            <img src={imgGirl} alt="girl" />
          </div>
          <div className={style.support}>
            Напишите нам, если у Вас возникли вопросы:
            <span className={style.email}>info@dishi.com</span>
            <img src={imgFly} alt="fly" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
