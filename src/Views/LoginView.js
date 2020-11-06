import React, { Component } from 'react';
import Main from '../components/LogIn/Main';
const styles = {
  display: 'flex',
};

export default class LoginView extends Component {
  render() {
    return (
      <div style={styles}>
        <Main />
      </div>
    );
  }
}
