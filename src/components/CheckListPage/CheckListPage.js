import { ChildCare } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsSelector from '../../redux/habits/habitsSelector';
import ItemHabit from './ItemHabit';
import s from './CheckListPage.module.css';
import { colors } from '@material-ui/core';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class CheckListPage extends Component {
  render() {
    const { items } = this.props;
    return (
      <>
        <h2 className={s.header}>Чек-лист привычек</h2>
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
