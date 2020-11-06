import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import quizOperation from '../../redux/quiz/quizOperation';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import styles from '../ModalContent/ModalContent.module.css';
import NotificationModal from '../notifications/NotificationModal';
import userOperation from '../../redux/user/userOperation';
import userSelector from '../../redux/user/userSelector';

function InterviewModal({ onClose }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const avatarState = userSelector.getAvatar(state);

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    if (avatarState === '') {
      dispatch(userOperation.addUserInfo({ avatar: '1' }));
    }
  }, [avatarState, dispatch]);

  const onSubmit = data => {
    dispatch(
      quizOperation.quizComplete({
        smokeYears: data.years,
        cigarettePerDay: data.amount,
        cigarettePerTime: data.time,
        cigarettePackPrice: data.price,
      }),
    );
  };

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Ответьте на 4 коротких вопроса.
      </h2>
      <p className={styles.modalTextCustom}>
        Так мы сможем более точно дать вам рекомендации:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formProfile}>
        <div className={styles.boxError}>
          {errors.years && errors.years.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.years && errors.years.type === 'min' && (
            <p className={styles.error}>*можно указать минимум 0</p>
          )}
        </div>
        <label htmlFor="years" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>Сколько лет Вы курите?</span>
          <input
            min="0"
            type="number"
            name="years"
            id="years"
            className={styles.input}
            ref={register({
              min: 0,
              required: true,
            })}
            style={{
              outlineColor: errors.years ? '#fe6083' : '#43d190',
              borderColor: errors.years ? '#fe6083' : '#e0e0e0',
            }}
          />
        </label>
        <div className={styles.boxError}>
          {errors.amount && errors.amount.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.amount && errors.amount.type === 'min' && (
            <p className={styles.error}>
              *должна быть указана минимум 1 сигарета
            </p>
          )}
        </div>
        <label htmlFor="amount" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько сигарет скуриваете в день?
          </span>
          <input
            min="0"
            type="number"
            name="amount"
            id="amount"
            className={styles.input}
            ref={register({
              min: 1,
              required: true,
            })}
            style={{
              outlineColor: errors.amount ? '#fe6083' : '#43d190',
              borderColor: errors.amount ? '#fe6083' : '#e0e0e0',
            }}
          />
        </label>
        <div className={styles.boxError}>
          {errors.time && errors.time.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.time && errors.time.type === 'min' && (
            <p className={styles.error}>*можно указать минимум 0</p>
          )}
        </div>
        <label htmlFor="time" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько минут у Вас уходит на 1 сигарету?
          </span>
          <input
            min="1"
            type="number"
            name="time"
            id="time"
            className={styles.input}
            ref={register({
              min: 0,
              required: true,
            })}
            style={{
              outlineColor: errors.time ? '#fe6083' : '#43d190',
              borderColor: errors.time ? '#fe6083' : '#e0e0e0',
            }}
          />
        </label>
        <div className={styles.boxError}>
          {errors.price && errors.price.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.price && errors.price.type === 'min' && (
            <p className={styles.error}>*можно указать минимум 0</p>
          )}
        </div>
        <label htmlFor="price" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько стоит одна пачка сигарет?
          </span>

          <input
            min="0"
            type="number"
            name="price"
            id="price"
            className={styles.input}
            ref={register({
              min: 0,
              required: true,
            })}
            style={{
              outlineColor: errors.price ? '#fe6083' : '#43d190',
              borderColor: errors.price ? '#fe6083' : '#e0e0e0',
            }}
          />
        </label>
        <div style={{ height: '20px', marginBottom: '5px' }}>
          <NotificationModal />
        </div>
        <div>
          <Button
            type={'submit'}
            green={true}
            // handelClick={() => onClose()}
            label={'Сохранить'}
          />
        </div>
      </form>
    </div>
  );
}

export default ModalBackdrop(InterviewModal);
