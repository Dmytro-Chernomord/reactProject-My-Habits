import React from 'react';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import medal from '../../images/homepage/medal.png';

import styles from '../ModalContent/ModalContent.module.css';

// habitName,
// onClick,  -----   закрытие модалки по клику
// ableToDelete,  -----  флаг возможности редактирования некоторых полей
// data   ---   объект с информацией (название, периодичность, id, время старта) о привычке. Взят из чек-листа.
// addData -----  добавляет данный в state для открытия новой модалки. Нужно будет новый state

function CongratulationModal({ onClick, info, onRepeat, onNewHabit }) {
  return (
    <div className={styles.modalWrapperGreen}>
      <div className={styles.modalCenterLayout}>
        {info.efficiency < 70 && (
          <p className={styles.percent}>
            Уровень закрепления привычки: {info.efficiency}%
          </p>
        )}
        {info.efficiency >= 70 && (
          <h2 className={styles.modalTitleCongrats}>Поздравляем!</h2>
        )}
        {info.efficiency <= 20 && (
          <>
            <p className={styles.modalTextCongrats}>
              Мы уверены, что ты можешь лучше! Давай повторим привычку для
              закрепления?
            </p>
          </>
        )}
        {info.efficiency > 20 && info.efficiency < 70 && (
          <>
            <p className={styles.modalTextCongrats}>
              Неплохо, но попробуй еще, ты сможешь улучшить свой результат!
            </p>
          </>
        )}
        {info.efficiency >= 70 && (
          <p className={styles.modalTextCongrats}>
            Вы успешно освоили привычку и стали на шаг ближе к своей цели.
          </p>
        )}
        <div className={styles.imgWrapper}>
          <img src={medal} alt="avatar" width="450" />
        </div>
        <div className={styles.btnFolder}>
          <div className={styles.btnBox}>
            <Button
              type={'button'}
              transparent={true}
              handelClick={() => onRepeat()}
              label={'Повторить'}
            />
          </div>
          <div>
            <Button
              type={'button'}
              hoverWhite={true}
              handelClick={() => onNewHabit()}
              label={'Добавить новую'}
            />
          </div>
        </div>
        <ButtonClose type="button" onClick={onClick} white={true} />
      </div>
    </div>
  );
}

export default ModalBackdrop(CongratulationModal);
