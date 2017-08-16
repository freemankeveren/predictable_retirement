import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import '../App.css';

const style = {
  header: {
    background: '#93B5C6',
    padding:'24px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  }
}


class NavBar extends Component {
  state = {}

  render() {
    return (
      <div style={style.header}>
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


export default NavBar;
