import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsSelector from '../../../redux/habits/habitsSelector';
import ItemHabit from '../ItemHabit';
import s from './HabitsListInHome.module.css';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class HabitsListInHome extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className={s.container}>
        <ul className={s.list}>
          {items.map(item => (
            <li
              key={item._id}
              className={s.item}
              style={{ borderLeftColor: generateColor() }}
              //   style={{ borderLeftColor: item.habitColor }}
            >
              <ItemHabit {...item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: habitsSelector.getFilterHabits(state),
});

export default connect(mapStateToProps)(HabitsListInHome);
