import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Income from './components/Income';

const style = {

  heroFront:{
    borderRadius: '0',
    boxShadow: 'none',
    padding: '64px',
    margin:'0',
    backgroundColor: '#EAF4F4',
  },
}

class App extends Component {
  render() {
    return (

<div>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/income' component={Income} />
      <Route component={NoMatch} />
    </Switch>
  <Footer />
</div>
);
}
}

export default App;
