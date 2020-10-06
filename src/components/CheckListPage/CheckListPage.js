import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateSelector from '../../redux/date/dateSelector';
import habitsSelector from '../../redux/habits/habitsSelector';
import habitsOperation from '../../redux/habits/habitsOperation';
import CigaretteRemindModal from '../CigaretteRemindModal/CigaretteRemindModal';
import DailyResultModal from '../DailyResultModal/DailyResultModal';
import { CheckListPageHeader } from './CheckListPageHeader/CheckListPageHeader';
import ItemHabit from './ItemHabit';
// import Button from '../UIcomponents/Button/Button';
import s from './CheckListPage.module.css';
import HabitsListInHome from './HabitsListInHome/HabitsListInHome';
import { Scroll } from '../Scroll/Scroll';

class CheckListPage extends Component {
  state = { showModal: '', updata: false };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== null && this.props.items.length > 0) {
      if (prevState.updata === false) {
        this.props.setHabitsData(this.props.items, this.props.currentDate);
        this.setState({ updata: true });
      }
    }
  }

  toggleModal = value => {
    this.setState({ showModal: value });
  };

  // closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  render() {
    const { items } = this.props;
    return (
      <>
        <Scroll
          staticComponentBefore={CheckListPageHeader}
          scrolledComponent={HabitsListInHome}
          dailyModal={() => {
            this.toggleModal('daily');
          }}
          missedDays={() => {
            this.toggleModal('missedDays');
          }}
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
        {this.state.showModal === 'missedDays' && (
          <CigaretteRemindModal
            onClose={() => {
              this.toggleModal('');
            }}
          ></CigaretteRemindModal>
        )}

        {this.state.showModal === 'daily' && (
          <DailyResultModal
            onClose={() => {
              this.toggleModal('');
            }}
          ></DailyResultModal>
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
