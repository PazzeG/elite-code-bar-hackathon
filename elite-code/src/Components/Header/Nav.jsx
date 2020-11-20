import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './Nav.css';



class Nav extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
   
      return (
          <div className="Nav" id="outer-container">
        <Menu outerContainerId={ "outer-container" }>
          <a  id="home" className="menu-item" href="/">Home</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        </div>
      );
    }
  }
export default Nav;