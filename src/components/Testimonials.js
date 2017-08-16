import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown, Grid, Button } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';

class Testimonials extends Component {
  state = {}

  render() {
    return (
    <div>
      <Segment basic secondary>
        <Grid columns={3}>
          <Grid.Column>
            <h2>Testimonials</h2>
            <h4>Hundreds of people just like you <br/>
                have found a Predicatable <br/>
                Retirement with our system.</h4>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
    )
  }
}


export default Testimonials;
