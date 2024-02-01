// Loader.jsx

import React from 'react';
import './Loader.scss';

const Loader = () => (
  <>
    <input className='input' type='checkbox' />
    <div className='bg'></div>
    <div className='dots'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='ring'></div>
    </div>
  </>
);

export default Loader;
