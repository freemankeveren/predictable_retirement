import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class Liquidity extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            Access to Funds is Key.
          </h1>
        </Segment>
        <Segment basic textAlign='center' style={style.stop}>
          <h2 text-align='center'>
            Vehicles with High Liquidity.
          </h2>
          <h4 text-align='center'>
            Example Text
          </h4>
        </Segment>
      </div>
    );
  }
}

export default Liquidity
