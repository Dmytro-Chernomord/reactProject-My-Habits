import React from 'react';
// import { useSelector } from 'react-redux';
import Notifications from '../../components/NotificationsPage/NotificationsPage';
// import Header from '../../components/Header/Header';
export default function NotificationsView({ habitsDatas }) {
  return (
    <div>
      <Notifications habitsDatas={{ habitsDatas }} />
    </div>
  );
}
