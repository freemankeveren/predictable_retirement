import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown, Grid, Button } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';

import incomephoto from '../assets/displayphoto.jpg';
import inflationphoto from '../assets/babyphoto.jpg';
import liquidityphoto from '../assets/inflationphoto.jpg';
import ltcphoto from '../assets/roadphoto.jpg';
import legacyphoto from '../assets/legacyphoto.jpg';

const style = {

  buttonPrimary:{
    backgroundColor: '#F28964',
  },

  h0:{
    fontSize: '48px',
    fontWeight: '200',
  },

  navPhotos:{
    padding: '0',
    borderRadius: '360',
  },
}

class Retirement extends Component {
  state = {}

  render() {
    return (
    <div>
    <Segment basic textAlign='center'>
      <h1 text-align='center' style={style.h0}>
        Find Retirement Peace of Mind.
      </h1>
      <h4 text-align='center'>
        Following principles in each of these areas will dramatically impact your abilty to retire.<br/>
        We will help you understand the complicated world of retirement finance.
      </h4>
    </Segment>
      <Segment basic>
        <Grid centered columns={0}>
          <Grid.Row columns={10}>
            <Grid.Column textAlign='center'>
              <Image src={incomephoto} style={style.navPhotos}/>
              <h4 textAlign='center'>Income</h4>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image src={inflationphoto} style={style.navPhotos}/>
              <h4 text-align='center'>Inflation</h4>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image src={liquidityphoto} style={style.navPhotos}/>
              <h4 text-align='center'>Liquidity</h4>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image src={ltcphoto} style={style.navPhotos}/>
              <h4 text-align='center'>Long Term Care</h4>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image src={legacyphoto} style={style.navPhotos}/>
              <h4 text-align='center'>Legacy</h4>
            </Grid.Column>
          </Grid.Row>
          <Segment basic>
            <Button size='big' style={style.buttonPrimary}>Take the First Step</Button>
          </Segment>
        </Grid>
      </Segment>
    </div>
    )
  }
}


export default Retirement;