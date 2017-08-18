import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import '../App.css';
import { Link } from 'react-router-dom'

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
            <Menu.Item>
              <Link to='/' style={{color:'black'}}>
                PREDICTABLE RETIREMENT
              </Link>
            </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Link to='/about' style={{color:'black'}}>
              ABOUT
              </Link>
            </Menu.Item>
            <Dropdown item text='PRINCIPLES'>
              <Dropdown.Menu>
              <Link to='/income'>
                <Dropdown.Item style={{color: 'black'}}>
                  Income
                </Dropdown.Item>
              </Link>
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
