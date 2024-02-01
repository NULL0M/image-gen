// client/src/components/LoginPage.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/context';
import { IoMdCloseCircle } from 'react-icons/io';
import { TbEye, TbEyeClosed } from 'react-icons/tb';
import './LoginPage.scss';

export default function LoginPage({ openRegisterModal }) {
  const { setUser, closeModal, togglePasswordVisibility, showPassword } =
    useContext(MyContext);
  const redirectUser = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const response = await fetch('http://localhost:8090/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    const results = await response.json();

    if (results) {
      setUser(results.user);
      redirectUser('/');
      closeModal();
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleForgotPassword = () => {
    closeModal();
  };

  return (
    <div className='loginpage'>
      <IoMdCloseCircle className='close-button' onClick={closeModal} />
      <Link className='loginpage-child ' to='/' />
      <div className='welcome-back-parent'>
        <h2 className='welcome-back'>Welcome back</h2>
        <p className='please-enter-your-email'>
          Please enter your Email and Password to log in
        </p>
      </div>
      <form className='email-form' action='' onSubmit={loginUser}>
        <label className='email2'>User Name</label>
        <span className='email-container'>
          <input
            className='email3'
            type='text'
            id='username'
            name='username'
            placeholder='User Name'
          />
        </span>
        <label className='email2'>Password</label>
        <span className='email-container'>
          <input
            className='email3'
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            placeholder='Password'
          />
          {/*Icon to toggle between showing and hiding password */}
          {showPassword ? (
            <TbEye
              className='toggle-password'
              onClick={togglePasswordVisibility}
            />
          ) : (
            <TbEyeClosed
              className='toggle-password'
              onClick={togglePasswordVisibility}
            />
          )}
        </span>
        <button type='submit' className='log-in-wrapper'>
          <div className='log-in'>Log In</div>
        </button>
      </form>
      <Link
        to='/forgotPassword'
        className='forgot-password-link'
        onClick={handleForgotPassword}>
        Forgot password?
      </Link>

      <div className='dont-have-an-account-yet-parent'>
        <h3 className='dont-have-an'>Don't have an account yet?</h3>
        <button className='registerButton' onClick={openRegisterModal}>
          <div className='loregisterButtonSubmit'>Create account</div>
        </button>
      </div>
    </div>
  );
}
