// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/context';
import Logo from '../assets/imageAIGeneratorLogo.png';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import './Header.scss';

function Header() {
  const {
    user,
    showRegister,
    showLogin,
    setShowRegister,
    setShowLogin,
    handleLogout,
  } = useContext(MyContext);

  const openLoginModal = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegisterModal = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <>
      <header className='header' data-scroll-to='header'>
        <img className='header-child' alt='' src={Logo} />
        <div className='navegationbar-wrapper'>
          <nav className='navegationbar'>
            <div className='menulinks'>
              <Link className='genarate' to='/'>
                Home
              </Link>
              <Link className='genarate' to='/userpage'>
                User Page
              </Link>
              {user ? (
                <>
                  <Link className='genarate' to='/theproject'>
                    The Project
                  </Link>
                  <Link className='genarate' onClick={handleLogout}>
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className='genarate'
                    to='/createpost'
                    onClick={openLoginModal}>
                    Generate
                  </Link>
                  <Link className='genarate' onClick={openLoginModal}>
                    Log In
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        {showLogin && (
          <LoginPage
            onClose={() => {
              setShowLogin(false);
            }}
            openRegisterModal={openRegisterModal}
          />
        )}
        {showRegister && (
          <CreateAccountPage onClose={() => setShowRegister(false)} />
        )}
      </header>
    </>
  );
}

export default Header;
