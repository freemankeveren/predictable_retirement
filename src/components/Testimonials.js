import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import '../App.css';

class Testimonials extends Component {
  state = {}

  render() {
    return (
    <div>
        <Grid columns={3}>
          <Grid.Column>
            <h2>Testimonials</h2>
            <h4>Hundreds of people just like you <br/>
                have found a Predicatable <br/>
                Retirement with our system.</h4>
          </Grid.Column>
        </Grid>
    </div>
    )
  }
}


export default Testimonials;
