import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Segment, Grid, Image, Button, Form } from 'semantic-ui-react';
import placeholder from './assets/Oval.jpg';

import incomephoto from './assets/displayphoto.jpg'
import inflationphoto from './assets/babyphoto.jpg'
import liquidityphoto from './assets/inflationphoto.jpg'
import ltcphoto from './assets/roadphoto.jpg'
import legacyphoto from './assets/legacyphoto.jpg'

import Footer from './components/Footer';

const style = {
  heroFront:{
    backgroundColor: '#ccc',
    borderRadius: '0',
    boxShadow: 'none',
    padding: '0px',
  },

  incomePhoto:{
    background: `url(${incomephoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '300',
  },

  inflationPhoto:{
    background: `url(${inflationphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '300',
  },

  liquidityPhoto:{
    background: `url(${liquidityphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '300',
  },

  ltcPhoto:{
    background: `url(${ltcphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '300',
  },

  legacyPhoto:{
    background: `url(${legacyphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '300',
  },
}

class App extends Component {
  render() {
    return (
      <div>
        <Segment style={style.heroFront}>
          <Navbar />
          <Segment basic textAlign='center'>
            <h1 text-align='center'>Find Retirement Peace of Mind.</h1>
            <h4 text-align='center'>Following principles in each of these areas will dramatically impact your abilty to retire.<br/>
                                    We will help you understand the complicated world of retirement finance.</h4>
          </Segment>
          <Segment basic>
          <Grid centered columns={0}>
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
              <Button size='big' color='teal'>Take the First Step</Button>
            </Segment>
          </Grid>

          </Segment>
        </Segment>
        <Segment basic>
        <Grid columns={3} padded='vertically'>
          <Grid.Column>
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

        <Grid columns={2} padded='vertically'>
          <Grid.Column style={style.incomePhoto} />

          <Grid.Column verticalAlign='middle' textAlign='left'>
            <h3>Income</h3>
            <h1>Stop the
                transfer of <br/>
                wealth away
                from you
                </h1>
            <h4>example placeholder</h4>
          </Grid.Column>
        </Grid>

        <Grid columns={2} padded='vertically'>
          <Grid.Column verticalAlign='middle' textAlign='right'>
            <h3>Inflation</h3>
            <h1>Beat the
                invisable <br/>
                hand that
                robs you</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
          <Grid.Column style={style.inflationPhoto} />
        </Grid>

        <Grid columns={2} padded='vertically'>
          <Grid.Column style={style.liquidityPhoto} />

          <Grid.Column verticalAlign='middle' textAlign='left'>
            <h3>Liquidity</h3>
            <h1>Money in
                motion <br/>
                grows
                wealth</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column verticalAlign='middle' textAlign='right'>
            <h3>Long Term Care</h3>
            <h1>Prepare for
                long term <br/>
                care with
                care</h1>
            <h4>example placeholder</h4>
          </Grid.Column>

          <Grid.Column style={style.ltcPhoto} />

        </Grid>

        <Grid columns={2} padded='vertically'>
          <Grid.Column style={style.legacyPhoto} />

          <Grid.Column verticalAlign='middle' textAlign='left'>
            <h3>Legacy</h3>
            <h1>What will
                your legacy <br/>
                look like to
                your family?</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
        </Grid>
        </Segment>

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
        <Segment secondary>
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
    );
  }
}

export default App;
