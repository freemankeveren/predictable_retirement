import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown, Grid, Button, Form, Style } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';

const style = {

  sectionEmailCapture:{
    padding: ' 64px 0',
    margin:'0',
    backgroundColor: '#F4FCFF',
  },

  fromSide: {
    padding: '25px'
  },
}

class Email extends Component {
  state = {}

  render() {
    return (
    <div>
    <Segment basic style={style.sectionEmailCapture}>
      <Grid columns={3} padded='vertically'>
        <Grid.Column style={style.fromSide}>
          <h1>Learn how to make your own<br/>
          Predicatable Retirement</h1>
          <h3>Hundreds of people just like you have found <br/> a Predicatable Retirement with out sytem. Stay up to <br/> date with our valuable emails sent weekly.</h3>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Form>
            <Form.Input size='big' placeholder='Email' />
          </Form>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Button size='big' color='teal'>Submit</Button>
        </Grid.Column>
      </Grid>
      <Segment basic textAlign='center'><label>No Spam Ever</label></Segment>
    </Segment>
    </div>
    )
  }
}


export default Email;
