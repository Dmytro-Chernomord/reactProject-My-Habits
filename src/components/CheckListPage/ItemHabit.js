import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsOperation from '../../redux/habits/habitsOperation';
import ProgressBar from '../UIcomponents/ProgressBar/ProgressBar';
import CustomHabitModal from '../CustomHabbitModal/CustomHabbitModal';
import s from './ItemHabit.module.css';

class ItemHabit extends Component {
  state = {
    index: -1,
    enabled: false,
    data: [],
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount = (key = 0) => {
    this.setState({
      index: key,
      enabled: this.props.data[key] == null ? false : true,
      data: this.props.data,
    });
  };

  show = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  countDataSuccess = data => {
    return data.filter(el => el === true).length;
  };

  countDataSkip = data => {
    return data.filter(el => el === false).length;
  };

  render() {
    const { name, efficiency, _id, iteration, planningTime } = this.props;
    const { data, index, enabled } = this.state;
    const habitData = { _id, name, iteration, planningTime };

    const stateBut1 = data[index] === true ? true : false;
    const stateBut2 = data[index] === false ? true : false;
    const color1 = stateBut1 && '#43D190';
    const color2 = stateBut2 && '#FE6083';

    return (
      <>
        <h3 className={s.title}>{name}</h3>
        <ProgressBar completed={efficiency} />
        <span className={s.progressNumber}>{efficiency}%</span>
        <p className={s.text}>Прогресс привития привычки</p>

        <button
          disabled={stateBut1}
          style={{ backgroundColor: color1 }}
          className={s.button1}
          onClick={this.show}
        >
          "+"
        </button>
        <button
          disabled={stateBut2}
          style={{ backgroundColor: color2 }}
          className={s.button2}
          onClick={this.show}
        >
          "-"
        </button>

        <button
          onClick={() => {
            this.props.settingHabit(_id);
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
                  {this.countDataSuccess(data)}
                </samp>
              </div>
              <div>
                <p className={s.text}>К-во пропущенных дней</p>
                <samp className={s.numberRed}>{this.countDataSkip(data)}</samp>
              </div>
            </div>
          </>
        )}
        {this.state.showModal && (
          <CustomHabitModal
            data={habitData}
            onClose={this.closeModal}
            ableToDelete={true}
          >
            {/* <ModalContent
            onSave={toggleModal}
            layout={layout}
            // ableToDelete={isAbleToDelete}
          /> */}
          </CustomHabitModal>
        )}
      </>
    );
  }
}

export default connect(null, { settingHabit: habitsOperation.setSetting })(
  ItemHabit,
);
