import React, { Component } from 'react';
import { connect } from 'react-redux';
import habitsSelector from '../../../redux/habits/habitsSelector';
import ItemHabit from '../ItemHabit';
import sortByTime from '../../../helpers/sortByTime';
import s from './HabitsListInHome.module.css';

class HabitsListInHome extends Component {
  render() {
    const { items } = this.props;
    const sortItems = sortByTime(items);
    return (
      <div className={s.container}>
        {sortItems !== null && sortItems.length > 0 && (
          <ul className={s.list}>
            {sortItems.map(item => (
              <li
                key={item._id}
                className={s.item}
                style={{ borderLeftColor: item.habitColor }}
              >
                <ItemHabit {...item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: habitsSelector.getFilterHabits(state),
});

export default connect(mapStateToProps)(HabitsListInHome);
