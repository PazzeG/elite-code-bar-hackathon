import './App.css';
import '../src/fonts/Metropolis1920-Regular.ttf'
import { Component } from 'react';
import Nav from './Components/Header/Nav';
import Geo from './Components/Geo/Geo';

class App extends Component  {
  render(){
    return (
      <div className="App">
        <Nav />
        <Geo />
      </div>
    );
  }
}

export default App;
