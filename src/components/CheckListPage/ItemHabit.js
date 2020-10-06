import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsOperation from '../../redux/habits/habitsOperation';
import ProgressBar from '../UIcomponents/ProgressBar/ProgressBar';
import CustomHabitModal from '../CustomHabbitModal/CustomHabbitModal';
import dateSelector from '../../redux/date/dateSelector';

import CongratulationModal from '../CongratulationModal/CongratulationModal';
import s from './ItemHabit.module.css';
import CheckListButton from '../UIcomponents/CheckListButton/CheckListButton';
import habitsSelector from '../../redux/habits/habitsSelector';


class ItemHabit extends Component {
  state = {
    showModal: false,
    modalUpdate: false,
    repeatHabit: false,
    flagForCongratModalOpen: true,
    uniqueId: '',
  };

  componentDidUpdate() {
    // const data = this.props.habits.find(
    //   habit => habit._id === this.state.uniqueId,
    // );
    // console.log(data.data);
  }

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
    // console.log('data ', data);
    // data это массив с null / true / false

    const habitData = { _id, name, iteration, planningTime, data };

    const index = this.getIndex();

    const enabled = data[index] === null ? false : true;

    let stateBut1 = data[index] === true ? true : false;
    let stateBut2 = data[index] === false ? true : false;

    const color1 = stateBut1 && '#43D190';
    const color2 = stateBut2 && '#FE6083';

    const statusOfHabit = data[index];

    //нельзя отметить выполнение наперед
    const enabledDate =
      currentDate.slice(0, 10) < selectedDate.slice(0, 10) ? true : false;
    stateBut1 = enabledDate ? true : stateBut1;
    stateBut2 = enabledDate ? true : stateBut2;

    // const MS_PER_DAY = 1000 * 60 * 60 * 24;
    // const currentDateToNum = Math.round(
    //   new Date(currentDate).valueOf() / MS_PER_DAY,
    // );
    // const selectedDateToNum = Math.round(
    //   new Date(selectedDate).valueOf() / MS_PER_DAY,
    // );
    // const isDisabledDate = selectedDateToNum > currentDateToNum ? true : false;

    return (
      <>
        <div className={s.habitBox}>
          <div>
            <h3 className={s.title}>{name}</h3>
            <ProgressBar completed={efficiency} />
            <span className={s.progressNumber}>{efficiency}%</span>
            <span>{index}</span>
            <p className={s.text}>Прогресс привития привычки</p>
          </div>
          <div className={s.btnBox}>
            <CheckListButton
              isDisabled={stateBut1}
              handelClick={() => {
                this.props.setHabitsDataDay(this.props, true, index);
                if (this.state.flagForCongratModalOpen) {
                  this.onHabitSuccess();
                }
              }}
              status={statusOfHabit}
              isCheckMark={true}
              label={'mark habit as done'}
            />
            <CheckListButton
              isDisabled={stateBut2}
              handelClick={() => {
                this.props.setHabitsDataDay(this.props, false, index);
              }}
              status={statusOfHabit}
              isCheckMark={false}
              label={'mark habit as unfulfilled'}
            />
          </div>
        </div>
        {/* <button
          disabled={stateBut1}
          style={{ backgroundColor: color1 }}
          className={s.button1}
          onClick={() => {
            this.props.setHabitsDataDay(this.props, true, index);
            this.openModal('congrats');
            this.setState({ uniqueId: this.props._id });
          }}
        >
          "+"
        </button>
        <button
          disabled={stateBut2}
          style={{ backgroundColor: color2 }}
          className={s.button2}
          onClick={() => {
            this.props.setHabitsDataDay(this.props, false, index);
            this.openModal('congrats');
          }}
        >
          "-"
        </button> */}

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
        {this.state.showModal === 'custom' && (
          <CustomHabitModal
            info={habitData}
            onClose={() => {
              this.openModal('');
              this.repeatHabit(false);
            }}
            ableToDelete={this.state.modalUpdate}
            repeatHabit={this.state.repeatHabit}
          ></CustomHabitModal>
        )}
        {this.state.showModal === 'congrats' && (
          <CongratulationModal
            data={habitData}
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
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: dateSelector.getSelectedDate(state),

  habits: habitsSelector.getAllHabits(state),

  currentDate: dateSelector.getCurrentDate(state),

});

const mapDispatchToprops = {
  setHabitsDataDay: habitsOperation.setHabitsDataDay,
};

export default connect(mapStateToProps, mapDispatchToprops)(ItemHabit);
