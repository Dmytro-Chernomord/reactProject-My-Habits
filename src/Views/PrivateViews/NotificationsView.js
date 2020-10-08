import React from 'react';
// import { useSelector } from 'react-redux';
import Notifications from '../../components/NotificationsPage/NotificationsPage';
// import Header from '../../components/Header/Header';
export default function NotificationsView({
  oneDayLeft,
  setNotification,
  youHaveThreeDaysLeft,
  halfWayTrough,
  youHaveFiveDaysLeft,
  youCanDoBetter,
  youGotAchievment,
  goodStart,
  allDayStatistic,
}) {
  return (
    <div>
      <Notifications
        youHaveThreeDaysLeft={youHaveThreeDaysLeft}
        setNotification={setNotification}
        oneDayLeft={oneDayLeft}
        halfWayTrough={halfWayTrough}
        youHaveFiveDaysLeft={youHaveFiveDaysLeft}
        youCanDoBetter={youCanDoBetter}
        youGotAchievment={youGotAchievment}
        goodStart={goodStart}
        allDayStatistic={allDayStatistic}
      />
    </div>
  );
}
