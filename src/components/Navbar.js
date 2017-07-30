import React, { Component } from 'react'
import { Menu, Image, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment tertiary>
      <Menu style={{color: 'light grey'}}>
        <Menu.Item header>
        <Image src={logo} size='mini' />
         Predicatable Retirement
        </Menu.Item>
        <Menu.Item name='about' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        <Menu.Item name='blog' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item name='content' active={activeItem === 'locations'} onClick={this.handleItemClick} />
      </Menu>
      </Segment>
    )
  }
}
