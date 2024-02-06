// client/src/components/CreateAccountPage.jsx

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../contexts/context';
import { IoMdCloseCircle } from 'react-icons/io';
import { TbEye, TbEyeClosed } from 'react-icons/tb';
import './CreateAccountPage.scss';

export default function CreateAccountPage() {
  const { closeModal, togglePasswordVisibility, showPassword } =
    useContext(MyContext);

  const register = async (e) => {
    e.preventDefault();
    const user = {
      user: e.target.user.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const response = await fetch(
        'http://localhost:8090/api/v1/user/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        alert('Account created successfully! You can now log in.');
        closeModal(); // Closes the modal after successful registration
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div className='createaccountpage'>
      <IoMdCloseCircle className='close-button' onClick={closeModal} />
      <Link className='createaccountpage-child' to='/' />
      <div className='hello-there-parent'>
        <h2 className='hello-there'>Hello there!</h2>
        <p className='welcome-to-imageaigenerator'>{`Welcome to ImageAIGenerator, please enter your email & password to create an account`}</p>
        <Toaster position='top-center' />
      </div>
      <form className='user-name-parent' action='' onSubmit={register}>
        <label className='user-name'>User Name</label>
        <span className='user-name-wrapper'>
          <input
            className='user-name1'
            type='text'
            id='user'
            name='user'
            placeholder='User Name'
          />
        </span>
        <label className='user-name'>Email</label>
        <span className='user-name-wrapper'>
          <input
            className='user-name1'
            type='email'
            id='email'
            name='email'
            placeholder='Email'
          />
        </span>
        <label className='user-name'>Password</label>
        <span className='user-name-wrapper'>
          <input
            className='user-name1'
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

        <div className='agreementcontainer'>
          <div className='rectangle-parent'>
            <input className='frame-child' required={true} type='checkbox' />
            <p className='i-agree-to-container'>
              <span>{`I agree to ImageAIGenerator `}</span>
              <Link to='/termsandprivacypolicy' target='_blank'>
                <span className='terms-and-privacy'>
                  Terms and Privacy Policy
                </span>
              </Link>
            </p>
          </div>
          <button className='registerButton'>
            <div className='loregisterButtonSubmit'>Create account</div>
          </button>
        </div>
      </form>
    </div>
  );
}
