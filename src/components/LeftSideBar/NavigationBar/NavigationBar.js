import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../../routes';
import styles from './NavigationBar.module.css';

const Navigation = ({ match }) => {
  console.log(match);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            activeStyle={styles}
            className={styles}
            to={`${match.url}`}
            exact
          >
            checklist
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={styles}
            className={styles}
            to={`${match.url}/Achievments`}
            exact
          >
            achievements
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={styles}
            className={styles}
            to={`${match.url}/NotificationsPage`}
            exact
          >
            notification
          </NavLink>
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
