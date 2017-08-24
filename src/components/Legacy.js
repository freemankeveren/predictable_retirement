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

class Legacy extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            What will your legacy be?
          </h1>
        </Segment>
        <Segment basic textAlign='center' style={style.stop}>
          <h2 text-align='center'>
            Pay on Time All the Time.
          </h2>
          <h4 text-align='center'>
            This is probably the number one rule in any credit situation. Paying your bills on time shows
            that you are reliable and can effectively manage (and pay off) your debt. Late payments,
            especially severely delinquent ones, will bring down your credit score and negatively impact
            your business and profile.
          </h4>
        </Segment>
      </div>
    );
  }
}

export default Legacy
