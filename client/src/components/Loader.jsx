// client/src/components/LoginPage.jsx

import React from 'react';
import './Loader.scss';

export const StaticLoader = () => (
  <div className='loader'>
    <div className='static'>
      <div className='static-ring-1'></div>
      <div className='static-ring-2'></div>
      <div className='static-ring-3'></div>
      <div className='static-ring-4'></div>
      <div className='static-ring-5'></div>
      <div className='static-ring-6'></div>
      <div className='static-ring-7'></div>
      <div className='static-center'></div>
    </div>
  </div>
);

export const AnimatedLoader = () => (
  <div className='loader'>
    <div className='Animations'>
      <div className='ring-1'></div>
      <div className='ring-2'></div>
      <div className='ring-3'></div>
      <div className='ring-4'></div>
      <div className='ring-5'></div>
      <div className='ring-6'></div>
      <div className='ring-7'></div>
      <div className='center'></div>
    </div>
  </div>
);
