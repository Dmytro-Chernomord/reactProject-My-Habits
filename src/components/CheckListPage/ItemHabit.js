import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsOperation from '../../redux/habits/habitsOperation';
import ProgressBar from '../UIcomponents/ProgressBar/ProgressBar';
import CustomHabitModal from '../CustomHabbitModal/CustomHabbitModal';
import dateSelector from '../../redux/date/dateSelector';

import CongratulationModal from '../CongratulationModal/CongratulationModal';
import s from './ItemHabit.module.css';

class ItemHabit extends Component {
  state = {
    showModal: false,
    habitSuccess: false,
    flagForCongratModalOpen: false,
  };

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  onHabitSuccess = () => {
    this.setState({ habitSuccess: true });
  };

  onRepeatHabit = () => {
    this.setState({ habitSuccess: false });
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
    this.setState({ habitSuccess: false });
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
    const habitData = { _id, name, iteration, planningTime };

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
            if (this.state.flagForCongratModalOpen) {
              this.onHabitSuccess();
            }
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
          }}
        >
          "-"
        </button>

        <button
          onClick={() => {
            this.toggleModal();
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
        {this.state.showModal && (
          <CustomHabitModal
            data={habitData}
            onClose={this.closeModal}
            ableToDelete={!this.state.flagForCongratModalOpen}
          ></CustomHabitModal>
        )}
        {this.state.habitSuccess && (
          <CongratulationModal
            data={habitData}
            onClose={this.closeModal}
            onRepeat={this.onRepeatHabit}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: dateSelector.getSelectedDate(state),
});

const mapDispatchToprops = {
  setHabitsDataDay: habitsOperation.setHabitsDataDay,
};

export default connect(mapStateToProps, mapDispatchToprops)(ItemHabit);
