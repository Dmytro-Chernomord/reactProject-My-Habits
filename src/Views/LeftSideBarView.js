import React from 'react';
import LogoBox from '../components/LeftSideBar/LogoBox/LogoBox';
import UserMenu from '../components/LeftSideBar/UserMenu/UserMenu';
import TimeMoney from '../components/LeftSideBar/TimeMoney/TimeMoney';
import NavigationBar from '../components/LeftSideBar/NavigationBar/NavigationBar';
import HabitsList from '../components/LeftSideBar/Habits/HabitsList';

export default function LeftSideBarView({ match, onLogOut }) {
  return (
    <>
      <LogoBox />
      <UserMenu match={match} onLogOut={onLogOut} />
      <TimeMoney />
      <NavigationBar match={match} />
      <HabitsList />
    </>
  );
}
