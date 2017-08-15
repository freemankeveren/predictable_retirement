import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown, Grid } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const style = {
  divStyle: {
    background: '#e0e2e4',
    height: '25vh',
    width: '100%',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    marginTop: '-17px',
    textAlign: 'right',
    float: 'left',
  }
}


class Blogs extends Component {
  state = {}

  render() {
    return (
      <Segment basic>
        <h1>Our Latest Blog Posts</h1>
        <Grid columns={2} style={style.fromSide}>
          <Grid.Column verticalAlign='middle'>
            <h2>Why You Will Pay More in Taxes at Retirement with a 401(k)</h2>
            <h4>Hundreds of people just like you have found a Predicatable Retirement <br />
            with our system. Stay up to date with our valuable emails sent weekly.</h4>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <h2>Start Saving into Whole Life Insurance (And Stop Saving into a 401k)</h2>
            <h4>Hundreds of people just like you have found a Predicatable Retirement <br />
            with our system. Stay up to date with our valuable emails sent weekly.</h4>
          </Grid.Column>
        </Grid>
        <Grid columns={2} style={style.fromSide}>
          <Grid.Column verticalAlign='middle'>
            <h2>Start Saving into Whole Life Insurance (And Stop Saving into a 401k)</h2>
            <h4>Hundreds of people just like you have found a Predicatable Retirement <br />
            with our system. Stay up to date with our valuable emails sent weekly.</h4>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <h2>Start Saving into Whole Life Insurance (And Stop Saving into a 401k)</h2>
            <h4>Hundreds of people just like you have found a Predicatable Retirement <br />
            with our system. Stay up to date with our valuable emails sent weekly.</h4>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}


export default Blogs;
