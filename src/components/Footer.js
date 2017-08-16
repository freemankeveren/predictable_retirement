import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import '../App.css';

const style = {
  divStyle: {
    background: '#e0e2e4',
    height: '25vh',
    width: '100%',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    marginTop: '-17px',
    textAlign: 'right',
    float: 'left',
  }
}


class Footer extends Component {
  state = {}

  render() {
    return (
      <div style={style.divStyle}>
        <Menu secondary>
        <Menu.Item>
        <Image src={logo} size='mini' />
        </Menu.Item>
            <Menu.Item name='PREDICTABLE RETIREMENT' />
          <Menu.Menu position='right'>
            <Menu.Item name='ABOUT' />
            <Dropdown item text='PRINCIPLES'>
              <Dropdown.Menu>
                <Dropdown.Item>Income</Dropdown.Item>
                <Dropdown.Item>Inflation</Dropdown.Item>
                <Dropdown.Item>Liquidity</Dropdown.Item>
                <Dropdown.Item>Long Term Care</Dropdown.Item>
                <Dropdown.Item>Legacy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name='BLOG' />
            <Menu.Item name='CONTACT' />
        </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default Footer;
