import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateSelector from '../../redux/date/dateSelector';
import habitsSelector from '../../redux/habits/habitsSelector';
import habitsOperation from '../../redux/habits/habitsOperation';

import DailyResultModal from '../DailyResultModal/DailyResultModal';
import { CheckListPageHeader } from './CheckListPageHeader/CheckListPageHeader';
import ItemHabit from './ItemHabit';
// import Button from '../UIcomponents/Button/Button';
import s from './CheckListPage.module.css';
import HabitsListInHome from './HabitsListInHome/HabitsListInHome';
import { Scroll } from '../Scroll/Scroll';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class CheckListPage extends Component {
  state = { showModal: false, updata: false };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== null && this.props.items.length > 0) {
      if (prevState.updata === false) {
        //todo закоментировано чтоб не пугать
        // решить проблему перерендера
        // this.props.setHabitsData(this.props.items, this.props.currentDate);
        this.setState({ updata: true });
      }
    }
  }

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { items } = this.props;
    return (
      <>
        <Scroll
          staticComponentBefore={CheckListPageHeader}
          scrolledComponent={HabitsListInHome}
          toggleModal={this.toggleModal}
        />
        {/* <CheckListPageHeader toggleModal={this.toggleModal} /> */}
        {/* <div className={s.headerContainer}>
          <h2 className={s.header}>Чек-лист привычек</h2>
          <Button
            type={'button'}
            green={false}
            handelClick={this.toggleModal}
            label={'+ Сигареты за сегодня'}
          />
        </div> */}
        {/* <HabitsListInHome /> */}

        {/* <div className={s.container}>
          <ul className={s.list}>
            {items.map(item => (
              <li
                key={item._id}
                className={s.item}
                style={{ borderLeftColor: generateColor() }}
              >
                <ItemHabit {...item} />
              </li>
            ))}
          </ul>
        </div> */}

        {this.state.showModal && (
          <DailyResultModal onClose={this.closeModal}></DailyResultModal>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: habitsSelector.getFilterHabits(state),
  currentDate: dateSelector.getCurrentDate(state),
});

const mapDispatchToprops = {
  setHabitsData: habitsOperation.setHabitsData,
};

export default connect(mapStateToProps, mapDispatchToprops)(CheckListPage);
