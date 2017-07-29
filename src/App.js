import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Segment>
        <Navbar />
        <Segment basic textAlign='center'>
          <h2 text-align='center'>Find Retirement Peace of Mind.</h2>
          <h4 text-align='center'>Following principles in each of these areas will dramatically impact your abilty to retire.
                                  We will help you understand the complicated world of retirement finance.</h4>
        </Segment>
      </Segment>
    );
  }
}

export default App;
