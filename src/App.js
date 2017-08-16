import React, { Component } from 'react';
import './App.css';
import { Segment, Grid, Image, Button, Form } from 'semantic-ui-react';
import placeholder from './assets/Oval.jpg';
import Navbar from './components/Navbar';
import Retirement from './components/Retirement';
import Email from './components/Email';
import FileConcepts from './components/FileConcepts';
import StageOfLife from './components/StageOfLife';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

const style = {
buttonPrimary:{
  backgroundColor: '#F28964',
},

  heroFront:{
    borderRadius: '0',
    boxShadow: 'none',
    padding: ' 64px 0',
    margin:'0',
    backgroundColor: '#EAF4F4',
  },
}

class App extends Component {
  render() {
    return (
      <div>

        <Segment secondary style={style.heroFront}>
          <Navbar />
          <Retirement />
        </Segment>
        <Segment basic>
          <Email />
          <FileConcepts />
          <StageOfLife />
          <Testimonials />
          <Blogs />
        </Segment>
        <Segment secondary style={style.heroFront}>
          <Footer />
        </Segment>
      </div>
    );
  }
}

export default App;
