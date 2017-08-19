import React, { Component } from 'react'
import { Segment, Grid, Button, Form } from 'semantic-ui-react'
import '../App.css';

const style = {

  widthContainer:{
    maxWidth: '1200px',
    margin: '0 auto',
  },

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
    <Segment basic style={style.widthContainer}>
      <Grid columns={3} padded='vertically'>
        <Grid.Column style={style.fromSide}>
          <h1>Learn how to make your own
          Predicatable Retirement</h1>
          <h3>Hundreds of people just like you have found a Predicatable Retirement with out sytem. Stay up to date with our valuable emails sent weekly.</h3>
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
    </Segment>
    </div>
    )
  }
}


export default Email;
