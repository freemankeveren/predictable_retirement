import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Retirement from './Retirement';
import Email from './Email';
import FileConcepts from './FileConcepts';
import StageOfLife from './StageOfLife';
import Testimonials from './Testimonials';
import Blogs from './Blogposts';

const style = {

  heroFront:{
    borderRadius: '0',
    boxShadow: 'none',
    padding: '64px',
    margin:'0',
    backgroundColor: '#EAF4F4',
  },

  secondsection:{
    padding: '0',
    margin: '0'
  },
}

class Home extends Component {
  render() {
    return (
      <div>
        <Segment secondary style={style.heroFront}>
          <Retirement />
        </Segment>
        <Segment basic style={style.secondsection}>
          <Email />
        </Segment>
        <Segment basic>
          <FileConcepts />
        </Segment>
        <Segment basic>
          <StageOfLife />
        </Segment>
        <Segment basic>
          <Testimonials />
        </Segment>
      </div>
    );
  }
}

export default Home
