// client/src/components/LoginPage.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/context';
import { IoMdCloseCircle } from 'react-icons/io';
import './LoginPage.scss';

export default function LoginPage({ openRegisterModal }) {
  const { setUser, closeModal } = useContext(MyContext);
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log('Login Info', loginInfo);

    try {
      const response = await fetch('http://localhost:8090/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        alert('Login successful!');
        closeModal();
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };
  const handleForgotPassword = () => {
    closeModal(); // Fechar o modal quando o link for clicado
  };

  return (
    <div className='loginpage'>
      <IoMdCloseCircle className='close-button' onClick={closeModal} />
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
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          />
        </span>
        <button type='submit' className='log-in-wrapper'>
          <div className='log-in'>Log In</div>
        </button>
        <Link
          to='/forgotPassword'
          className='forgot-password-link'
          onClick={handleForgotPassword}>
          Forgot password?
        </Link>
      </form>

      <div className='dont-have-an-account-yet-parent'>
        <h3 className='dont-have-an'>Don't have an account yet?</h3>
        <button className='registerButton' onClick={openRegisterModal}>
          <div className='loregisterButtonSubmit'>Create account</div>
        </button>
      </div>
    </div>
  );
}
