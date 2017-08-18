import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Navbar from './Navbar';
import Retirement from './Retirement';
import Email from './Email';
import FileConcepts from './FileConcepts';
import StageOfLife from './StageOfLife';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
import Footer from './Footer';

const style = {

  heroFront:{
    borderRadius: '0',
    boxShadow: 'none',
    padding: '64px',
    margin:'0',
    backgroundColor: '#EAF4F4',
  },
}

class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home
