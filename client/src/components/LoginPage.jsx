// client/src/components/LoginPage.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Remova o import do useHistory
import { MyContext } from '../contexts/context';
import { IoMdCloseCircle } from 'react-icons/io';
import './LoginPage.scss';

export default function LoginPage({ openRegisterModal }) {
  // Adicione redirectUser como prop
  const { setUser, closeModal } = useContext(MyContext);

  const redirectUser = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log('Login Info', loginInfo);

    // try {
    const response = await fetch('http://localhost:8090/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    const results = await response.json();

    console.log(results);

    if (results) {
      // const results = await response.json(); // Convert the response to JSON
      setUser(results.user);

      console.log(results.user); // Define the user with the received data

      // Redirect to home page after successful login using redirectUser function
      redirectUser('/');
      closeModal(); // Close the modal
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
    // }
    // catch (error) {
    //   console.error('Error during login:', error);
    //   alert('Error during login. Please try again.');
    // }
  };

  const handleForgotPassword = () => {
    closeModal(); // Close the modal when the link is clicked loginPage
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
