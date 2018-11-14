import React from 'react';
import './Sidebar.css';
import xImage from '../../images/x.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return(
    <div className='sidebar-main'>
      <img
        alt=''
        className='close-button'
        src={xImage}
        onClick={props.expandLeftMenu}
      />
      <div className='sidebar-container'>

        <NavLink
          className='sidebar-option'
            to='/about'>
          <div
            className='sidebar-option'
            onClick={props.expandLeftMenu}>
            About
          </div>
        </NavLink>

        <NavLink
          className='sidebar-option'
          to='/contact'>
          <div 
            className='sidebar-option'
            onClick={props.expandLeftMenu}>
            Contact
          </div>
        </NavLink>

        <NavLink
          className='sidebar-option'
          to='/portfolio'>
          <div
            className='sidebar-option'
            onClick={props.expandLeftMenu}>
            Portfolio
          </div>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar;