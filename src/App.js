<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
=======
import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) => {
     this.setState({ searchField: e.target.value })
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Monsters Roledex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
>>>>>>> d7104a8e07b4c4e976e20bb35c0680190f5b891d
}

export default App;