// client/src/components/LoginPage.jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/context';
import './LoginPage.scss';

export default function LoginPage({ openRegisterModal }) {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
      onClose: onClose,
    };
  };

  return (
    <div className='loginpage'>
      <Link className='loginpage-child' to='/' />
      <div className='welcome-back-parent'>
        <h2 className='welcome-back'>{`Welcome  back `}</h2>
        <p className='please-enter-your-email'>
          Please enter your Email and Password to log in
        </p>
      </div>
      <form className='email-form' action='' onSubmit={loginUser}>
        <label className='email2'>Email</label>
        <span className='email-container'>
          <input
            className='email3'
            type='email'
            id='email'
            name='email'
            placeholder='Email'
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
      </form>
      <button className='log-in-wrapper'>
        <div className='log-in'>Log In</div>
      </button>
      <div className='dont-have-an-account-yet-parent'>
        <h3 className='dont-have-an'>Don't have an account yet?</h3>
        <button className='registerButton' onClick={openRegisterModal}>
          <div className='loregisterButtonSubmit'>Create account</div>
        </button>
      </div>
    </div>
  );
}
