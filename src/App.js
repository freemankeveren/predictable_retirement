import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Segment, Grid, Image, Button } from 'semantic-ui-react';
import placeholder from './assets/Oval.jpg';
import displayphoto from './assets/displayphoto.jpg'
import babyphoto from './assets/babyphoto.jpg'
import inflationphoto from './assets/inflationphoto.jpg'
import roadphoto from './assets/roadphoto.jpg'
import legacyphoto from './assets/legacyphoto.jpg'

class App extends Component {
  render() {
    return (
      <div>
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
        <Segment>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src={displayphoto} />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src={inflationphoto} />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src={babyphoto} />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src={roadphoto} />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src={legacyphoto} />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
