import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import '../App.css';
import { Link } from 'react-router-dom'

const style = {
  divStyle: {
    background: '#93B5C6',
    height: '25vh',
    width: '100%',
    padding:'24px',
    display: 'flex',
    flexDirection: 'column',
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
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
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
              <Link to='/inflation'>
                <Dropdown.Item style={{color: 'black'}}>
                  Inflation
                </Dropdown.Item>
              </Link>
              <Link to='/liquidity'>
                <Dropdown.Item style={{color: 'black'}}>
                  Liquidity
                </Dropdown.Item>
              </Link>
              <Link to='/longtermcare'>
                <Dropdown.Item style={{color: 'black'}}>
                  Long Term Care
                </Dropdown.Item>
              </Link>
              <Link to='/legacy'>
                <Dropdown.Item style={{color: 'black'}}>
                  Legacy
                </Dropdown.Item>
              </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Link to='/blog' style={{color:'black'}}>
                BLOG
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/contact' style={{color:'black'}}>
                CONTACT
              </Link>
            </Menu.Item>
        </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default Footer;
