import React from 'react';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';

import styles from '../ModalContent/ModalContent.module.css';

// habitName,
// onClick,  -----   закрытие модалки по клику
// ableToDelete,  -----  флаг возможности редактирования некоторых полей
// data   ---   объект с информацией (название, периодичность, id, время старта) о привычке. Взят из чек-листа.
// addData -----  добавляет данный в state для открытия новой модалки. Нужно будет новый state

function CongratulationModal({
  habitName,
  onClick,
  onClose,
  ableToDelete,
  data,
  addData,
  onRepeat,
}) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalCenterLayout}>
        <h2 className={(styles.modalTitle, styles.modalTitleTemplate)}>
          Поздравляем!
        </h2>
        <p className={styles.modalTextCustom}>
          Вы успешно освоили привычку и стали на шаг ближе к своей цели.
        </p>
        <p>{data.name}</p>
        <p>{data._id}</p>
        <p>{data.iteration}</p>
        <p>{data.planningTime}</p>
        <div className={styles.btnFolder}>
          <div className={styles.btnBox}>
            <Button
              type={'button'}
              green={true}
              handelClick={() => onRepeat()}
              label={'Повторить'}
            />
          </div>
          <div>
            <Button type={'button'} green={false} label={'Добавить новую'} />
          </div>
        </div>
        <ButtonClose type="button" onClick={onClick} />
      </div>
    </div>
  );
}

export default ModalBackdrop(CongratulationModal);
