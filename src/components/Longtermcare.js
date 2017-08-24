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

class Longtermcare extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            The Largest Cost in the Golden Years.
          </h1>
        </Segment>
        <Segment basic textAlign='center' style={style.stop}>
          <h2 text-align='center'>
            Put Your Business on the Map.
          </h2>
          <h4 text-align='center'>
            Just becasue your are open (or about to open) for business, does not necessarily mean you
            have put yourself on the map. You can not effectively establish credit until you have established
            your business! Be sure to check the following item off your To-Do list.
          </h4>
        </Segment>
      </div>
    );
  }
}

export default Longtermcare
