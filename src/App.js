import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Retirement from './components/Retirement';
import Email from './components/Email';
import FileConcepts from './components/FileConcepts';
import StageOfLife from './components/StageOfLife';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

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
      <Route component={NoMatch} />
    </Switch>
  <Footer />
</div>
);
}
}

export default App;
