import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Segment, Grid, Image, Button, Form } from 'semantic-ui-react';
import placeholder from './assets/Oval.jpg';
import displayphoto from './assets/displayphoto.jpg'
import babyphoto from './assets/babyphoto.jpg'
import inflationphoto from './assets/inflationphoto.jpg'
import roadphoto from './assets/roadphoto.jpg'
import legacyphoto from './assets/legacyphoto.jpg'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Segment secondary>
          <Navbar />
          <Segment basic textAlign='center'>
            <h1 text-align='center'>Find Retirement Peace of Mind.</h1>
            <h4 text-align='center'>Following principles in each of these areas will dramatically impact your abilty to retire.<br/>
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
          <Grid.Column>
            <Image src={displayphoto} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' textAlign='center'>
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
          <Grid.Column verticalAlign='middle' textAlign='center'>
            <h3>Inflation</h3>
            <h1>Beat the
                invisable <br/>
                hand that
                robs you</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
          <Grid.Column>
            <Image src={inflationphoto} />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src={babyphoto} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' textAlign='center'>
            <h3>Liquidity</h3>
            <h1>Money in
                motion <br/>
                grows
                wealth</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column verticalAlign='middle' textAlign='center'>
            <h3>Long Term Care</h3>
            <h1>Prepare for
                long term <br/>
                care with
                care</h1>
            <h4>example placeholder</h4>
          </Grid.Column>
          <Grid.Column>
            <Image src={roadphoto} />
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Image src={legacyphoto} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' textAlign='center'>
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
                <div></div>
              </Grid.Column>
              <Grid.Column>
                <h3>Distribution</h3>
                <h1>Age 70 + </h1>
                <h4>Example Text</h4>
                <Button size='big' color='teal'>Get Started</Button>
              </Grid.Column>
            </Grid>
          </Segment>
        <Segment tertiary>
          <Grid columns={3}>
            <Grid.Column verticalAlign='middle'>
              <h2 verticalAlign='middle'>Testimonials</h2>
              <h4 verticalAlign='middle'>Hundreds of people just like you <br/>
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
