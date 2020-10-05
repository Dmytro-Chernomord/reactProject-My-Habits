import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import style from './Subscriptions.module.css';
import Button from '../../../components/UIcomponents/Button/Button';
import Payments from '../../../components/Payment/Payment';
import operathions from '../../../redux/user/userOperation';
import selector from '../../../redux/user/userSelector';
import Countdown from 'react-countdown';

const Subscriptions = () => {
  const [plan, setPlan] = useState('');
  const [disabledBtn, setDisabled] = useState(false);
  const [disabledTimer, setTimer] = useState(false);

  const dispatch = useDispatch();
  const subscription = useSelector(selector.getSubscription);
  const RegisterDate = useSelector(selector.getRegisterDate);

  const UserDateRegiste = Date.parse(RegisterDate);

  const TimeLoop = Date.now() - UserDateRegiste;
  const sevenDays = 620050000;

  useEffect(() => {
    if (TimeLoop < sevenDays) {
      setTimer(true);
      if (subscription !== 'Ultra') {
        dispatch(operathions.changeSubscription({ plan: 'Ultra' }));
      }
    } else if (TimeLoop > sevenDays) {
      setTimer(false);
    }
  }, [TimeLoop, disabledTimer, dispatch, sevenDays, subscription]);

  const changeSubscription = useCallback(() => {
    dispatch(operathions.changeSubscription({ plan }));
  }, [dispatch, plan]);

  const handleSubscription = e => {
    setPlan(e.target.textContent);
    setDisabled(true);
  };
  const onTimerCompleted = useCallback(() => {
    dispatch(operathions.changeSubscription({ plan: 'Noob' }));
  }, [dispatch]);

  const changeAfterCoundown = () => {
    onTimerCompleted();
  };

  const pushSubsrpt = () => {
    changeSubscription();
    setDisabled(false);
  };

  const changeColor = () => {
    switch (subscription) {
      case 'Noob':
        return style.Noob;

      case 'Basic':
        return style.Basic;

      case 'Standart':
        return style.Standart;

      case 'Premium':
        return style.Premium;

      case 'Ultra':
        return style.Ultra;

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
        {disabledTimer && (
          <>
            <div className={style.timer}>
              <div>
                <span className={style.Text}>Day:</span>
                <span className={style.Text}>Hour:</span>
                <span className={style.Text}>Min:</span>
                <span className={style.Text}>Sec:</span>
              </div>
              <div>
                <Countdown
                  date={UserDateRegiste + sevenDays}
                  onComplete={changeAfterCoundown}
                />
              </div>
              {/* <Countdown date={Date.now() + 1000000} /> */}
            </div>
          </>
        )}
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
