import logo from '../resources/ChainTrackerLogo.PNG';
import './MainStyle.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <div className="body">
          <img src = {logo} alt = "Logo"/>
          <h1>Chain Tracker</h1>
          <h2>Reliable and secure.</h2> 
          <p>Store data using blockchain.</p>
          <p>*more detailed description here*</p>
          <Link to="/Software">Software {'>'}</Link>
        </div>
        

        

      </div>
    );
  }
}
