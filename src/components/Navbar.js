import React, { Component } from 'react'
import { Menu, Image, Segment, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.jpg';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item>
        <Image src={logo} size='mini' />
         Predicatable Retirement
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='about' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
          <Dropdown item text='Principles'>
            <Dropdown.Menu>
              <Dropdown.Item>Income</Dropdown.Item>
              <Dropdown.Item>Inflation</Dropdown.Item>
              <Dropdown.Item>Liquidity</Dropdown.Item>
              <Dropdown.Item>Long Term Care</Dropdown.Item>
              <Dropdown.Item>Legacy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
          <Menu.Item name='content' active={activeItem === 'content'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
