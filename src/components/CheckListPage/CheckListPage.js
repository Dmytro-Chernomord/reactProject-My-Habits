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

class CheckListPage extends Component {
  state = { showModal: false, updata: false };

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
                style={{ borderLeftColor: item.habitColor }}
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
