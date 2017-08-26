import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

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
    borderRadius: '0',
    boxShadow: 'none',
    padding: '64px',
    margin:'0',
    fontSize: '48px',
    fontWeight: '200',
  },

  h0:{
    fontSize: '48px',
    fontWeight: '200',
  },
}

class Income extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            About Us!
          </h1>
        </Segment>
      </div>
    );
  }
}

export default Income
