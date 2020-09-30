import React, { Component } from 'react';
import LoginForm from '../components/LogIn/LoginForm';
import RegisterForm from '../components/LogIn/RegisterForm';
import Main from '../components/LogIn/Main';
import MainPrivateView from '../Views/PrivateViews/MainPrivateView';
const styles = {
  display: 'flex',
};

export default class LoginView extends Component {
  render() {
    return (
      <div style={styles}>
        <LoginForm />
        <Main />
        <RegisterForm />
        <MainPrivateView />
      </div>
    );
  }
}
