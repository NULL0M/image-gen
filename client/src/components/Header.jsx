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
