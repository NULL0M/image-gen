import toast, { Toaster } from 'react-hot-toast'; //this is for popups after login
import { useContext } from 'react';
import { MyContext } from '../contexts/context';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './CreateAccountPage.scss';

export default function CreateAccountPage() {
  const { user, closeModal } = useContext(MyContext);

  const register = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    // .then((res) => res.json())
    // .then((result) => {
    //   if (result.errors) {
    //     console.log(result.errors);
    //     toast.error(JSON.stringify(result.erros)); //this is to pop up the error message
    //   } else {
    //     e.target.reset();
    //     toast.success("you successfully registered"); //this is to pop up the error message
    //     setTimeout(() => {
    //       navigate("/login"); //this is navigate to login page
    //     }, 1500);
    //   }
    // })
    // .catch((err) => console.log(err));
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
            id='username'
            name='username'
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
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          />
        </span>

        <div className='agreementcontainer'>
          <div className='rectangle-parent'>
            <input className='frame-child' required={true} type='checkbox' />
            <p className='i-agree-to-container'>
              <span>{`I agree to ImageAIGenerator `}</span>
              <span className='terms-and-privacy'>
                Terms and Privacy Policy
              </span>
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
