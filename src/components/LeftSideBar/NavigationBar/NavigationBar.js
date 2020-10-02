import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Cup } from '../../../images/svg-icons/trash.svg';
import { ReactComponent as Bell } from '../../../images/svg-icons/trash.svg';
import { ReactComponent as Calendar } from '../../../images/svg-icons/trash.svg';
// import calendar from '../../../images/menu-icons/calendar.svg';
import styles from './NavigationBar.module.css';

const Navigation = ({ match }) => {
  console.log(match);
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.linkBox}>
          <Link className={styles.iconBox} to={`${match.url}`}>
            <Calendar />
            /checklist
            {/* <div className={styles.iconBox}>
              <img src={calendar} alt="avatar" width="100" height="100" />
            </div> */}
          </Link>
        </li>
        <li className={styles.linkBox}>
          <Link className={styles.iconBox} to={`${match.url}/Achievments`}>
            <Cup />
            /achievements
          </Link>
        </li>
        <li className={styles.linkBox}>
          <Link
            className={styles.iconBox}
            to={`${match.url}/NotificationsPage`}
          >
            <Bell />
            /notifications
          </Link>
        </li>
      </ul>
    </nav>
  );
};

//   <nav>
//     <ul>
//       <li>
//         {/* <NavLink
//           activeStyle={styles}
//           className={styles}
//           to={routes.checklist}
//           exact
//         >
//           checklist
//         </NavLink> */}
//       </li>
//       <li>
//         {/* <NavLink
//           activeStyle={styles}
//           className={styles}
//           to={routes.achievements}
//           exact
//         >
//           achievements
//         </NavLink> */}
//       </li>
//       <li>
//         <NavLink
//           activeStyle={styles}
//           className={styles}
//           to={`${match.url}/NotificationsPage`}
//           exact
//         >
//           notification
//         </NavLink>
//       </li>
//     </ul>
//   </nav>
// );

export default connect()(Navigation);
