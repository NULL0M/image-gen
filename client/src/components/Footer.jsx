// src/components/Footer.jsx

import { FaRegEnvelope } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { SlSocialFacebook } from 'react-icons/sl';
import Logo from '../assets/imageAIGeneratorLogo.png';
import './Footer.scss';
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col'>
          <a href='#top'>
            {' '}
            {/* Link para voltar ao topo */}
            <img alt='' src={Logo} />
          </a>
          <p className='sentence'>
            Unlock the power of creativity with ImageAIGenerator: Where
            innovation meets imagination, crafting images through the lens of
            artificial intelligence.
          </p>
        </div>
        <div className='col'>
          <h3>
            Office{' '}
            <div className='underline'>
              {' '}
              <span></span>
            </div>
          </h3>
          <p>itpl Road</p>
          <p>Adresse</p>
          <p>land</p>
          <p className='email-id'>drywurts@gmail.com</p>
          <h4>0800666777</h4>
        </div>
        <div className='col'>
          <h3>
            Links{' '}
            <div className='underline'>
              {' '}
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Features</a>
            </li>
            <li>
              <a href=''>Home</a>
            </li>
          </ul>
        </div>
        <div className='col'>
          <h3>
            Newsletter{' '}
            <div className='underline'>
              {' '}
              <span></span>
            </div>
          </h3>
          <form>
            <FaRegEnvelope />
            <input type='email' placeholder='Enter you email id' required />
            <button type='sumit'>
              {' '}
              <FaArrowRight />{' '}
            </button>
          </form>
          <div className='social-icons'>
            <SlSocialInstagram />
            <TiSocialTwitter />
            <TiSocialInstagram />
            <SlSocialFacebook />
          </div>
        </div>
      </div>
      <hr />
      <p className='copyright'> All rights reserved AI imageGenerator© 2024 </p>
    </footer>
  );
};
