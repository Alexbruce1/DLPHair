import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/dlp.png';
import menuIcon from '../../images/menu.svg';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const { expandLeftMenu } = this.props;
    return(
      <div className='page-header'>
        <button className='header-button' onClick={expandLeftMenu}>
          <img 
            alt=''
            className='hamburger-menu'
            src={menuIcon} 
          />
        </button>
        <NavLink to='/' className='page-name-header'>
          <h1 className='page-name-header'>Devyne Petersen</h1>
        </NavLink>
        <button className='header-button'>
          <img
            alt=''
            className='header-logo'
            src={logo}
          />
        </button>
      </div>
    )
  }
}