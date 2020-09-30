import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
import TempBut from '../components/TempBut';

const styles = {
  display: 'flex',
  box: { outline: '1px solid teal' },
};

class HomeView extends Component {
  render() {
    return (
      <>
        <h2>Это домашняя страница за логиненого пользователя</h2>
        <div style={styles}>
          <div style={styles.box}>
            LeftSideBar
            <TempBut onClick={this.props.onLogOut}>Log Out</TempBut>
          </div>

          <div style={styles.box}>
            <header>title</header>
            <div>Основная часть компонента CheckListPage</div>
          </div>
          <div style={styles.box}>RightSideBar</div>
        </div>
      </>
    );
  }
}

export default connect(null, {
  onLogOut: authOperation.logOut,
})(HomeView);
