import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsOperation from '../../redux/habits/habitsOperation';
import ProgressBar from '../UIcomponents/ProgressBar/ProgressBar';
import CustomHabitModal from '../CustomHabbitModal/CustomHabbitModal';
import dateSelector from '../../redux/date/dateSelector';

import CongratulationModal from '../CongratulationModal/CongratulationModal';
import s from './ItemHabit.module.css';
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
    const { name, efficiency, _id, iteration, data, planningTime } = this.props;

    const habitData = { _id, name, iteration, planningTime, data };

    const index = this.getIndex();
    const enabled = data[index] === null ? false : true;

    const stateBut1 = data[index] === true ? true : false;
    const stateBut2 = data[index] === false ? true : false;
    const color1 = stateBut1 && '#43D190';
    const color2 = stateBut2 && '#FE6083';
    return (
      <>
        <h3 className={s.title}>{name}</h3>
        <ProgressBar completed={efficiency} />
        <span className={s.progressNumber}>{efficiency}%</span>
        <span>{index}</span>
        <p className={s.text}>Прогресс привития привычки</p>

        <button
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
        </button>

        <button
          onClick={() => {
            this.ableToUpdate(true);
            this.openModal('custom');
          }}
        >
          настройка
        </button>

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
});

const mapDispatchToprops = {
  setHabitsDataDay: habitsOperation.setHabitsDataDay,
};

export default connect(mapStateToProps, mapDispatchToprops)(ItemHabit);
