// Ihor
// Кнопка заглушка

import React, { Component } from 'react';

export default class TempBut extends Component {
  render() {
    return <button onClick={this.props.onClick}>Log Out</button>;
  }
}
