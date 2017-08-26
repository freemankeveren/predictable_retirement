import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Form, Input, TextArea, Button } from 'semantic-ui-react';

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

  buttonPrimary:{
    backgroundColor: '#F28964',
  },
}

class Contact extends Component {
  render() {
    return (
      <div>
        <Segment basic textAlign='center' style={style.heroFront}>
          <h1 text-align='center' style={style.h0}>
            Let Us Know!
          </h1>
        </Segment>
        <Segment basic>
          <Grid columns={2}>
            <Grid.Column>
              <Form centered>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>First name</label>
                    <Input placeholder='First name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last name</label>
                    <Input placeholder='Last name' />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>What is your email?</label>
                    <Input placeholder='Your email here.' />
                  </Form.Field>
                </Form.Group>
                <Segment centered basic>
                  <Button size='big' style={style.buttonPrimary}>Take the First Step</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Contact
