import React from 'react';
import './Contact.css';

const Contact = () => {
  return(
    <div className='contact-main'>
      <div className='contact-info'>
        <h2>Contact</h2>
        <a className='contact-address' href='https://www.google.com/maps?q=282+S+Pennsylvania+st+Denver,+CO+80209'>
          <ul>
            <li>Allure Hair Studio</li>
            <li>Tel: (303)715-1000</li>
            <li>282 S Pennsylvania</li>
            <li>Denver, CO 80209</li>
          </ul>
        </a>
      </div>

      <div className='contact-follow'>
        <h2>Follow</h2>
        <ul>
          <li>
            <a href='https://www.instagram.com/DevynePetersen/' >Instagram: @DevynePetersen</a>
          </li>
          <li>
            <a href='https://www.facebook.com/DLPHairDenver/'>Facebook: DLP Hair Denver</a>
          </li>
        </ul>
      </div>

      <div className='contact-tell'>
        <h2>Tell</h2>
        <p>Collaborations and booking questions. All inquiries will be responded to within 24 hours</p>
        <form className='contact-form'>
          <input
            className='contact-input'
            type='text'
            placeholder='Name' 
          />
          <input
            className='contact-input'
            type='email'
            placeholder='Email' 
          />
          <input
            className='contact-input'
            type='phone'
            placeholder='Phone' 
          />
          <input
            className='contact-input'
            type='text'
            placeholder='Message' 
          />
          <input
            type='submit'
            className='contact-input-submit'
            value='submit'
          />
        </form>
      </div>
    </div>
  )
}

export default Contact;