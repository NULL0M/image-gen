// client/src/components/Header.jsx

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

  // Function to clear locally stored token and redirect to home page
  const handleLogoutAndRedirect = () => {
    // Remove locally stored token
    localStorage.removeItem('token');
    handleLogout();
  };

  return (
    <>
      <header className='header' data-scroll-to='header'>
        <img className='header-child' alt='' src={Logo} />
        <div className='navegationbar-wrapper'>
          <nav className='navegationbar'>
            <div className='menulinks'>
              <Link className='generate' to='/'>
                Home
              </Link>
              {user ? (
                <>
                  <Link className='generate' to='/createpost'>
                    Generate
                  </Link>
                  <Link className='generate' to='/theproject'>
                    The Project
                  </Link>
                  <Link className='generate' to='/userpage'>
                    User Page
                  </Link>
                  <Link
                    className='generate'
                    onClick={handleLogoutAndRedirect}
                    to='/'>
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link className='generate' onClick={openLoginModal}>
                    Log In
                  </Link>
                </>
              )}
            </div>
            {/* Burger Menu Section */}
            <div className='burguermenu'>
              {/* Your burger menu content */}
              <input type='checkbox' id='active' />
              <label htmlFor='active' className='menuToggle'>
                <span></span>
              </label>
              <label htmlFor='active' className='close'></label>

              <div className='wrapper'>
                {/* Your links here */}
                <Link to='/' className='generate'>
                  Home
                </Link>
                {user ? (
                  <>
                    <Link to='/createpost' className='generate'>
                      Generate
                    </Link>
                    <Link to='/theproject' className='generate'>
                      The Project
                    </Link>
                    <Link to='/userpage' className='generate'>
                      User Page
                    </Link>
                    <Link
                      to='/'
                      className='generate'
                      onClick={handleLogoutAndRedirect}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to='/' className='generate' onClick={openLoginModal}>
                      Log In
                    </Link>
                  </>
                )}
              </div>
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
