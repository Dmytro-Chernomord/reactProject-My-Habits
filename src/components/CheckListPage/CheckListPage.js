import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import dateSelector from '../../redux/date/dateSelector';
import habitsSelector from '../../redux/habits/habitsSelector';
import habitsOperation from '../../redux/habits/habitsOperation';

import DailyResultModal from '../DailyResultModal/DailyResultModal';
import { CheckListPageHeader } from './CheckListPageHeader/CheckListPageHeader';
import HabitsListInHome from './HabitsListInHome/HabitsListInHome';
import { Scroll } from '../Scroll/Scroll';
import transitionStyles from '../../components/ModalContent/ModalTransition.module.css';

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

  render() {
    return (
      <>
        <Scroll
          staticComponentBefore={CheckListPageHeader}
          scrolledComponent={HabitsListInHome}
          dailyModal={() => {
            this.toggleModal('daily');
          }}
        />
        <CSSTransition
          in={this.state.showModal === 'daily'}
          timeout={250}
          classNames={transitionStyles}
          unmountOnExit
        >
          <DailyResultModal
            onClose={() => this.toggleModal('')}
          ></DailyResultModal>
        </CSSTransition>
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
