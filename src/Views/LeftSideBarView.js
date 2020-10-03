import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import UserMenu from '../components/LeftSideBar/UserMenu/UserMenu';
import TimeMoney from '../components/LeftSideBar/TimeMoney/TimeMoney';
import NavigationBar from '../components/LeftSideBar/NavigationBar/NavigationBar';
import HabitsList from '../components/LeftSideBar/Habits/HabitsList';

export default function LeftSideBarView({ match, onLogOut }) {
  const habits = { habits: [], id: 1 };
  return (
    <LeftSideBar>
      <>
        <UserMenu match={match} onLogOut={onLogOut} />
        <TimeMoney />
        <NavigationBar match={match} />
        <HabitsList habits={habits} />
      </>
    </LeftSideBar>
  );
}
