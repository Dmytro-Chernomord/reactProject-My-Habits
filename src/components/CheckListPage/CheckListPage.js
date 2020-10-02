import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsSelector from '../../redux/habits/habitsSelector';
import ItemHabit from './ItemHabit';
import Button from '../UIcomponents/Button/Button';
import s from './CheckListPage.module.css';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class CheckListPage extends Component {
  render() {
    const { items } = this.props;
    return (
      <>
        <div className={s.headerContainer}>
          <h2 className={s.header}>Чек-лист привычек</h2>
          <Button
            type={'button'}
            green={false}
            handelClick={() => {
              this.props.toggleModal();
              this.props.changeLayout('DailyResultModal');
            }}
            label={'+ Сигареты за сегодня'}
          />
        </div>
        <div className={s.container}>
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
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: habitsSelector.getFilterHabits(state),
});

export default connect(mapStateToProps)(CheckListPage);
