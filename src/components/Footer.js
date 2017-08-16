import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  rightNavs = () => {
    const { user, dispatch, history } = this.props;
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
        const { activeItem } = this.state
    return (
      <div style={style.divStyle}>
        <Menu secondary>
        <Menu.Item>
        <Image src={logo} size='mini' />
        </Menu.Item>
            <Menu.Item name='PREDICTABLE RETIREMENT' />
          { this.rightNavs() }
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
