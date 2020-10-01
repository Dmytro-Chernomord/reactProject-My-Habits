import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import UserMenu from '../components/LeftSideBar/UserMenu/UserMenu';
import TimeMoney from '../components/LeftSideBar/TimeMoney/TimeMoney';
import NavigationBar from '../components/LeftSideBar/NavigationBar/NavigationBar';
import Habits from '../components/LeftSideBar/Habits/Habits';

export default function LeftSideBarView() {
  return (
    <LeftSideBar>
      <UserMenu />
      <TimeMoney />
      <NavigationBar />
      <Habits />
    </LeftSideBar>
  );
}
