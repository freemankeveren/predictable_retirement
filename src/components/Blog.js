import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid } from 'semantic-ui-react';
import Blogs from './Blogposts';

const style = {

  heroFront:{
    borderRadius: '0',
    boxShadow: 'none',
    padding: '64px',
    margin:'0',
    backgroundColor: '#EAF4F4',
    fontSize: '48px',
    fontWeight: '200',
  },


  stop:{
    padding: '64px',
  },
}

class Blog extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            Stay Intune with Us.
          </h1>
        </Segment>
        <Segment basic>
          <Blogs />
        </Segment>
      </div>
    );
  }
}

export default Blog
