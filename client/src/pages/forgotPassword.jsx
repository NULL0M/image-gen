// client/src/pages/forgotPassword.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import './forgotPassword.scss';

export default function ForgotPassword({ openRegisterModal }) {
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch(
        'https://image-aigenerator.onrender.com/api/v1/reset-password/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: resetPasswordEmail }),
        }
      );

      const data = await response.json();
      alert(data.message); // Mensagem do servidor
    } catch (error) {
      console.error('Error requesting password reset:', error);
      alert('Error requesting password reset. Please try again.');
    }
  };

  return (
    <div className='forgotPassword'>
      <Header />
      <main className='main'>
        <div className='forgot-password-page'>
          <div className='forgotPasswordTitle'>
            <h2>Forgot password?</h2>
            <p>Enter your email address below to reset your password.</p>
          </div>
          <form>
            <div className='user-box'>
              <input
                type='email'
                id='resetPasswordEmail'
                value={resetPasswordEmail}
                onChange={(e) => setResetPasswordEmail(e.target.value)}
              />
              <label>Enter your email:</label>
            </div>

            <button type='button' onClick={handleForgotPassword}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Reset Password
            </button>
          </form>
          <p>
            Don't have an account?{' '}
            <a href='' className='a2' onClick={openRegisterModal}>
              Sign up!
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
