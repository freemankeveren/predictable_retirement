import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown, Grid, Button } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';

class StageOfLife extends Component {
  state = {}

  render() {
    return (
    <div>
      <Segment basic textAlign='center'>
        <h1>Your Focus Depends on Your Stage of Life</h1>
        <h4>Stop the transfer of wealth away from you. Then focus on the stage of life you are in.</h4>
      </Segment>
        <Segment basic>
          <Grid columns={2}>
            <Grid.Column>
              <div></div>
            </Grid.Column>
            <Grid.Column>
              <h3>Accumulation</h3>
              <h1>Age 25-50</h1>
              <h4>Example Text</h4>
              <Button size='big' color='teal'>Get Started</Button>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment basic>
          <Grid columns={2}>
            <Grid.Column>
              <div></div>
            </Grid.Column>
            <Grid.Column>
              <h3>Conservation</h3>
              <h1>Age 50-70</h1>
              <h4>Example Text</h4>
              <Button position='right' size='big' color='teal'>Get Started</Button>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment basic>
          <Grid columns={2}>
            <Grid.Column>
              <div>Hello</div>
            </Grid.Column>
            <Grid.Column>
              <h3>Distribution</h3>
              <h1>Age 70 + </h1>
              <h4>Example Text</h4>
              <Button size='big' color='teal'>Get Started</Button>
            </Grid.Column>
          </Grid>
        </Segment>
    </div>
    )
  }
}


export default StageOfLife;
