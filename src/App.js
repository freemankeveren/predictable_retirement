import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Segment, Grid, Image, Button } from 'semantic-ui-react';
import placeholder from './assets/Oval.jpg';

class App extends Component {
  render() {
    return (
      <Segment secondary>
        <Navbar />
        <Segment basic textAlign='center'>
          <h1 text-align='center'>Find Retirement Peace of Mind.</h1>
          <h4 text-align='center'>Following principles in each of these areas will dramatically impact your abilty to retire.
                                  We will help you understand the complicated world of retirement finance.</h4>
        </Segment>
        <Segment basic>
        <Grid centered columns={10}>
          <Grid.Row columns={10}>
            <Grid.Column>
              <Image src={placeholder} />
              <h4 textAlign='center'>Income</h4>
            </Grid.Column>
            <Grid.Column>
              <Image src={placeholder} />
              <h4 text-align='center'>Inflation</h4>
            </Grid.Column>
            <Grid.Column>
              <Image src={placeholder} />
              <h4 text-align='center'>Liquidity</h4>
            </Grid.Column>
            <Grid.Column>
              <Image src={placeholder} />
              <h4 text-align='center'>Long Term Care</h4>
            </Grid.Column>
            <Grid.Column>
              <Image src={placeholder} />
              <h4 text-align='center'>Legacy</h4>
            </Grid.Column>
          </Grid.Row>
          <Segment basic>
            <Button color='teal'>Take the First Step</Button>
          </Segment>
        </Grid>

        </Segment>
      </Segment>
    );
  }
}

export default App;
