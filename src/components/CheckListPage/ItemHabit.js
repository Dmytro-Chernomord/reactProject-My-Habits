import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import habitsOperation from '../../redux/habits/habitsOperation';
import ProgressBar from '../UIcomponents/ProgressBar/ProgressBar';
import CustomHabitModal from '../CustomHabbitModal/CustomHabbitModal';
import dateSelector from '../../redux/date/dateSelector';

import CongratulationModal from '../CongratulationModal/CongratulationModal';
import s from './ItemHabit.module.css';
import CheckListButton from '../UIcomponents/CheckListButton/CheckListButton';
// import habitsSelector from '../../redux/habits/habitsSelector';
import transitionStyles from '../ModalContent/ModalTransition.module.css';

class ItemHabit extends Component {
  state = {
    showModal: false,
    modalUpdate: false,
    repeatHabit: false,
    flagForCongratModalOpen: true,
    uniqueId: '',
  };

  openModal = data => {
    this.setState({ showModal: data });
  };

  ableToUpdate = value => {
    this.setState({ modalUpdate: value });
  };

  repeatHabit = value => {
    this.setState({ repeatHabit: value });
  };

  getIndex = () => {
    const nowDate = this.props.selectedDate.slice(0, 10);
    return this.props.habitsDates.findIndex(el => el === nowDate);
  };

  countData = (data, key) => {
    return data.filter(el => el === key).length;
  };

  render() {
    const {
      name,
      efficiency,
      _id,
      iteration,
      data,
      planningTime,
      selectedDate,
      currentDate,
    } = this.props;

    const habitData = { _id, name, iteration, planningTime, data, efficiency };

    const index = this.getIndex();

    const enabled = data[index] === null ? false : true;

    let stateBut1 = data[index] === true ? true : false;
    let stateBut2 = data[index] === false ? true : false;

    const statusOfHabit = data[index];

    //нельзя отметить выполнение наперед
    let enabledDate =
      currentDate.slice(0, 10) < selectedDate.slice(0, 10) ? true : false;
    // stateBut1 = enabledDate ? true : stateBut1;
    // stateBut2 = enabledDate ? true : stateBut2;

    return (
      <>
        <div className={s.habitBox}>
          <div>
            <h3 className={s.title}>{name}</h3>
            <ProgressBar completed={efficiency} />
            <span className={s.progressNumber}>{efficiency}%</span>
            {/* <span>{index}</span> */}
            <p className={s.text}>Прогресс привития привычки</p>
          </div>
          <div className={s.btnBox}>
            {!enabledDate && (
              <CheckListButton
                isDisabled={stateBut1}
                handelClick={() => {
                  this.props.setHabitsDataDay(this.props, true, index);
                  if (index === 20) {
                    this.openModal('congrats');
                    this.setState({ uniqueId: this.props._id });
                  }
                }}
                status={statusOfHabit}
                isCheckMark={true}
                label={'mark habit as done'}
              />
            )}
            {!enabledDate && (
              <CheckListButton
                isDisabled={stateBut2}
                handelClick={() => {
                  this.props.setHabitsDataDay(this.props, false, index);
                  if (index === 20) {
                    this.openModal('congrats');
                    this.setState({ uniqueId: this.props._id });
                  }
                }}
                status={statusOfHabit}
                isCheckMark={false}
                label={'mark habit as unfulfilled'}
              />
            )}
          </div>
        </div>

        <button
          className={s.settings}
          type="button"
          aria-label="settings"
          onClick={() => {
            this.ableToUpdate(true);
            this.openModal('custom');
          }}
        ></button>

        {enabled && (
          <>
            <div className={s.border}></div>
            <div className={s.description}>
              <div>
                <p className={s.text}>К-во выполненных дней</p>
                <samp className={s.numberGreen}>
                  {this.countData(data, true)}
                </samp>
              </div>
              <div>
                <p className={s.text}>К-во пропущенных дней</p>
                <samp className={s.numberRed}>
                  {this.countData(data, false)}
                </samp>
              </div>
            </div>
          </>
        )}
        <CSSTransition
          in={this.state.showModal === 'custom'}
          timeout={250}
          classNames={transitionStyles}
          unmountOnExit
        >
          <CustomHabitModal
            info={habitData}
            onClose={() => {
              this.openModal('');
              this.repeatHabit(false);
            }}
            ableToDelete={this.state.modalUpdate}
            repeatHabit={this.state.repeatHabit}
          ></CustomHabitModal>
        </CSSTransition>
        {/* {this.state.showModal === 'custom' && (
          <CustomHabitModal
            info={habitData}
            onClose={() => {
              this.openModal('');
              this.repeatHabit(false);
            }}
            ableToDelete={this.state.modalUpdate}
            repeatHabit={this.state.repeatHabit}
          ></CustomHabitModal>
        )} */}
        <CSSTransition
          in={this.state.showModal === 'congrats'}
          timeout={250}
          classNames={transitionStyles}
          unmountOnExit
        >
          <CongratulationModal
            info={habitData}
            onClose={() => {
              this.openModal('');
              this.repeatHabit(false);
            }}
            onRepeat={() => {
              this.openModal('custom');
              this.ableToUpdate(false);
              this.repeatHabit(true);
            }}
            onNewHabit={() => {
              this.openModal('custom');
              this.ableToUpdate(false);
            }}
          />
        </CSSTransition>
        {/* {this.state.showModal === 'congrats' && (
          <CongratulationModal
            info={habitData}
            onClose={() => {
              this.openModal('');
              this.repeatHabit(false);
            }}
            onRepeat={() => {
              this.openModal('custom');
              this.ableToUpdate(false);
              this.repeatHabit(true);
            }}
            onNewHabit={() => {
              this.openModal('custom');
              this.ableToUpdate(false);
            }}
          />
        )} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: dateSelector.getSelectedDate(state),
  // habits: habitsSelector.getAllHabits(state),
  currentDate: dateSelector.getCurrentDate(state),
});

const mapDispatchToprops = {
  setHabitsDataDay: habitsOperation.setHabitsDataDay,
};

export default connect(mapStateToProps, mapDispatchToprops)(ItemHabit);
