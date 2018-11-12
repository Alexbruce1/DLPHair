import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import emailLogo from '../../images/email.svg';
import facebookLogo from '../../images/facebook.svg';
import instagramLogo from '../../images/instagram.svg';




class About extends Component {
  render() {
    return(
      <div>
        <div className='about-blurb'>
          <h1 className='about-name'>This is Devyne</h1>
          <p className='about-description'>
            Devyne has always wanted to be a hairstylist. This has helped drive her passion and love for the beauty industry.  Whether it’s a trendy style or being backstage at an event, Devyne takes pride in creating masterpieces for every situation. Devyne is very ambitious, learns quickly in an ever-changing industry and loves a challenge!  Her knowledge is always expanding from taking numerous classes every year and working with other talented individuals in the industry to fine-tune her skills. She maintains personal goals to motivate and grow as a professional.
            <br />
            <strong>
              "As a hairstylist, I help individuals realize how beautiful and creative they actually are.”
            </strong>
          </p>
          <div className='contact-buttons'>
            <img className='contact-button' alt='' src={emailLogo} />
            <img className='contact-button' alt='' src={facebookLogo} />
            <img className='contact-button' alt='' src={instagramLogo} />
          </div>
        </div>
      </div>
    )
  }
}

export default About;