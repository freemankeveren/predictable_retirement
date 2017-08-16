import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import '../App.css';

import incomephoto from '../assets/displayphoto.jpg';
import inflationphoto from '../assets/babyphoto.jpg';
import liquidityphoto from '../assets/inflationphoto.jpg';
import ltcphoto from '../assets/roadphoto.jpg';
import legacyphoto from '../assets/legacyphoto.jpg';

const style = {

  incomePhoto:{
    background: `url(${incomephoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '600px',
  },

  inflationPhoto:{
    background: `url(${inflationphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '600px',
  },

  liquidityPhoto:{
    background: `url(${liquidityphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '600px',
  },

  ltcPhoto:{
    background: `url(${ltcphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '600px',
  },

  legacyPhoto:{
    background: `url(${legacyphoto}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '600px',
  },
}

class FileConcepts extends Component {
  state = {}

  render() {
    return (
    <div>
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
    </div>
    )
  }
}


export default FileConcepts;
