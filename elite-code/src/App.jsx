import './App.css';
import '../src/fonts/Metropolis1920-Regular.ttf'
import { Component } from 'react';
import Nav from './Components/Header/Nav';

class App extends Component  {
  render(){
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
