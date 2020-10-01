import React from 'react';
// import LeftSideBar from './LeftSideBar/LeftSideBar';
import UserMenu from './UserMenu/UserMenu';
import TimeMoney from './TimeMoney/TimeMoney';
import NavigationBar from './NavigationBar/NavigationBar';
import HabitsList from './Habits/HabitsList';

export default function LeftSideBar() {
  const habits = { habits: [], id: 1 };
  return (
    <div>
      <h2>My habits logo</h2>
      <UserMenu />
      <TimeMoney />
      <NavigationBar />
      <HabitsList habits={habits} />
    </div>
  );
}
