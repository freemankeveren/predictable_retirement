import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'
import Income from './components/Income';
import Inflation from './components/Inflation';
import Liquidity from './components/Liquidity';
import Longtermcare from './components/Longtermcare'
import Legacy from './components/Legacy'

class App extends Component {
  render() {
    return (

<div>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/income' component={Income} />
      <Route exact path='/inflation' component={Inflation} />
      <Route exact path='/liquidity' component={Liquidity} />
      <Route exact path='/longtermcare' component={Longtermcare} />
      <Route exact path='/legacy' component={Legacy} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  <Footer />
</div>
);
}
}

export default App;
