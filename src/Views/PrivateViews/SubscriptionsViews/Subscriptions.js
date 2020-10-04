import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import style from './Subscriptions.module.css';
import Button from '../../../components/UIcomponents/Button/Button';
import Payments from '../../../components/Payment/Payment';
import operathions from '../../../redux/user/userOperation';
import selector from '../../../redux/user/userSelector';

const Subscriptions = () => {
  const [plan, setPlan] = useState('');
  const [disabledBtn, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const subscription = useSelector(selector.getSubscription);

  const changeSubscription = useCallback(() => {
    dispatch(operathions.changeSubscription({ plan }));
  }, [dispatch, plan]);

  const handleSubscription = e => {
    setPlan(e.target.textContent);
    setDisabled(true);
  };

  const pushSubsrpt = () => {
    changeSubscription();
    setDisabled(false);
  };

  const changeColor = () => {
    switch (subscription) {
      case 'Noob':
        return style.btnNoob;

      case 'Basic':
        return style.btnBasic;

      case 'Standart':
        return style.btnStandart;

      case 'Premium':
        return style.btnPremium;

      case 'Ultra':
        return style.btnUltra;

      default:
        return style.styleSubscpt;
    }
  };

  return (
    <>
      <Header title="Подписки" />
      <div className={style.div}>
        <h2 className={style.header}>Тип подписки:</h2>
        <span className={changeColor()}>{subscription}</span>

        <div className={style.subscribe}>
          <button
            type="button"
            className={
              disabledBtn && plan === 'Noob' ? style.test : style.btnNoob
            }
            onClick={handleSubscription}
          >
            Noob
          </button>
          <p className={style.color}> 30 дней — $4.99</p>
        </div>
        <div className={style.subscribe}>
          <button
            type="button"
            className={
              disabledBtn && plan === 'Basic' ? style.test : style.btnBasic
            }
            onClick={handleSubscription}
          >
            Basic
          </button>
          <p className={style.color}>
            1 месяц — $4.80 <span className={style.span}>- 3%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button
            type="button"
            className={
              disabledBtn && plan === 'Standart'
                ? style.test
                : style.btnStandart
            }
            onClick={handleSubscription}
          >
            Standart
          </button>
          <p className={style.color}>
            3 месяца — $14.20 <span className={style.span}>- 5%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button
            type="button"
            className={
              disabledBtn && plan === 'Premium' ? style.test : style.btnPremium
            }
            onClick={handleSubscription}
          >
            Premium
          </button>
          <p className={style.color}>
            6 месяцев — $27.84 <span className={style.span}>- 7%</span>
          </p>
        </div>
        <div className={style.subscribe}>
          <button
            type="button"
            className={
              disabledBtn && plan === 'Ultra' ? style.test : style.btnUltra
            }
            onClick={handleSubscription}
          >
            Ultra
          </button>
          <p className={style.color}>
            12 месяцев — $53.89 <span className={style.span}>- 10%</span>
          </p>
        </div>
        <div className={style.position}>
          <Button
            type="button"
            label="Изменить подписку"
            handelClick={pushSubsrpt}
          />
        </div>
      </div>
      <Payments />
    </>
  );
};

export default Subscriptions;
