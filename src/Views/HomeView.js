import React, { Component } from 'react';

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <h2>Это домашняя страница за логиненого пользователя</h2>
        <div>LeftSideBar</div>
        <div>
          <header>title</header>
          <div>Основная часть компонента CheckListPage</div>
        </div>
        <div>RightSideBar</div>
      </div>
    );
  }
}
