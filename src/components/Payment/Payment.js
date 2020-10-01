import React from 'react';
import style from './Payment.module.css';
import Button from '../UIcomponents/Button/Button';
import imgFly from '../../images/logo/Fly.svg';
import imgGirl from '../../images/logo/Girl.svg';

const Payment = () => {
  return (
    <>
      <div className={style.background}>
        <h2 className={style.titel}>Мои карты</h2>
        <div className={style.card}>
          <p className={style.cardText}>Моя карта</p>
          <span className={style.cardNumb}>
            0 9 8 8<span className={style.numbSpace}></span> 9 8 7 7
            <span className={style.numbSpace}></span>0 9 0 7
            <span className={style.numbSpace}></span>0 9 8 7
          </span>
          <div className={style.cardDelete}>
            <span className={style.cardDate}>Истекает: 24.05.2024</span>
            <span className={style.block}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM11.1182 4.13818H8.88986V4.51314H8.085V4.08569C8.085 3.67086 8.42233 3.33333 8.83696 3.33333H11.1711C11.5858 3.33333 11.9231 3.67086 11.923 4.08569V4.51314H11.1182V4.13818ZM13.7815 7.70182H6.22658C6.01957 7.70182 5.8566 7.87842 5.87329 8.08482L6.5049 15.8949C6.5401 16.3309 6.90376 16.6667 7.34067 16.6667H12.6673C13.1042 16.6667 13.4679 16.3309 13.5031 15.8948L14.1347 8.08482C14.1515 7.87842 13.9885 7.70182 13.7815 7.70182ZM8.0559 15.8336C8.04746 15.8341 8.03902 15.8345 8.03068 15.8345C7.8197 15.8345 7.64259 15.6702 7.62947 15.4567L7.23366 9.0451C7.22003 8.82324 7.38879 8.6323 7.61055 8.61867C7.8316 8.60524 8.02335 8.7736 8.03698 8.99556L8.43269 15.4072C8.44643 15.6291 8.27766 15.8199 8.0559 15.8336ZM10.4109 15.432C10.4109 15.6542 10.2308 15.8343 10.0085 15.8343C9.78625 15.8343 9.60609 15.6542 9.60609 15.432V9.02028C9.60609 8.79801 9.78625 8.61786 10.0085 8.61786C10.2307 8.61786 10.4109 8.79801 10.4109 9.02028V15.432ZM12.7744 9.04399L12.3965 15.4556C12.384 15.6695 12.2066 15.8343 11.9952 15.8343C11.9873 15.8343 11.9792 15.8341 11.9712 15.8337C11.7493 15.8206 11.5801 15.6302 11.5932 15.4083L11.971 8.99658C11.984 8.77472 12.1738 8.60545 12.3963 8.61857C12.6182 8.63159 12.7875 8.82212 12.7744 9.04399ZM14.9089 5.66776L15.1732 6.46C15.2241 6.61269 15.1578 6.76853 15.034 6.84625C14.9836 6.87799 14.9238 6.89701 14.8582 6.89701H5.14997C5.08436 6.89701 5.02464 6.87799 4.97419 6.84635C4.85039 6.76864 4.78406 6.61279 4.83503 6.46L5.09931 5.66776C5.16889 5.45892 5.36451 5.31803 5.58464 5.31803H14.4234C14.6437 5.31803 14.8392 5.45892 14.9089 5.66776Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className={style.buttons}>
          <Button type="button" label=" + Добавить карту" />
          <Button type="button" label=" Оплатить" green={true} />
        </div>
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
