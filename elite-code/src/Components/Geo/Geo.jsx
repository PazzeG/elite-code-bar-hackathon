import React, { Component } from 'react';

class Geo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tracked: false
    };
    this.handleTrackedClick =this.handleTrackedClick.bind(this);
  }
  handleTrackedClick() {
       this.setState({ tracked: !this.state.tracked });
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
  
     
    });
  }

  render() {
    return (
      <div>
        <button onClick= {this.handleTrackedClick} >{this.state.tracked ? 'on' : 'off'}</button>
      </div>
    );
  }
}

export default Geo;