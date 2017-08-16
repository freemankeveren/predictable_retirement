import React, { Component } from 'react';
import './App.css';
import { Segment } from 'semantic-ui-react';
import Navbar from './components/Navbar';
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
    padding: '0',
    margin:'0',
    backgroundColor: '#EAF4F4',
  },
}

class App extends Component {
  render() {
    return (
      <div>

      <Navbar />
        <Segment secondary style={style.heroFront}>
          <Retirement />
          <Email />
        </Segment>
        <Segment basic>
          <FileConcepts />
          <StageOfLife />
          <Testimonials />
          <Blogs />
        </Segment>
        <Segment style={style.heroFront}>
          <Footer />
        </Segment>
      </div>
    );
  }
}

export default App;
