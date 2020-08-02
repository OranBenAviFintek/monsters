import React, {Component} from 'react';
import { CardList } from './Components/CardList/CardList'
import './App.css';
import {SearchBox} from './Components/SearchBox/SearchBox'

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        monsters: [],
        searchField: ''
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters: users} ));
  }

  render(){
    const { monsters, searchField } = this.state;

    const filterdSerachfieled = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Bolodex</h1>
        <SearchBox 
          placholder='serach a monster'
          handleChange={e => this.setState({searchField: e.target.value})} 
        />
        <CardList monsters={filterdSerachfieled}></CardList>
      </div>
    );
  }
}

export default App;
