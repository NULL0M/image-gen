// src/components/Header.jsx
import React, { useContext } from 'react'; // Importe 'useContext' do React
import { Link } from 'react-router-dom'; // Importe 'Link' do pacote 'react-router-dom'
import { MyContext } from '../contexts/context';
import Logo from '../assets/imageAIGeneratorLogo.png';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import './Header.scss';

function Header() {
  const { user, showRegister, showLogin, setShowRegister, setShowLogin } =
    useContext(MyContext);

  const openLoginModal = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegisterModal = () => {
    setShowRegister(true);
    setShowLogin(false);
  };
  //
  // Function to close the login modal
  const closeLoginModal = () => {
    {
      showLogin && <LoginPage onClose={closeLoginModal} />;
    }
  };
  // Descomente a definição da função
  const closeRegisterModal = () => {
    setShowRegister(false);
  };

  return (
    <>
      <header className='header' data-scroll-to='header'>
        <img className='header-child' alt='' src={Logo} />
        <div className='navegationbar-wrapper'>
          <nav className='navegationbar'>
            <div className='menulinks'>
              <Link
                className='genarate'
                to='/'
                // onClick={onHomeTextClick}
              >
                Home
              </Link>
              <Link
                className='genarate'
                to='/createpost'
                // onClick={onGenerateTextClick}
              >
                Generate
              </Link>
              <Link
                className='genarate'
                to='/theproject'
                // onClick={onTheProjectClick}
              >
                The Project
              </Link>
              <Link className='genarate' onClick={openLoginModal}>
                Log In
              </Link>
              <Link className='genarate' to='/userpage'>
                User Page
              </Link>
              {/* <CreateFreeAccount /> */}
            </div>
            {/* <button className="burguermenu">
              <img
                className="burguermenu-child"
                alt=""
                src={imageDimensionCode}
              />
              <img
                className="burguermenu-child"
                alt=""
                src={imageDimensionCode2}
              />
              <img
                className="burguermenu-child"
                alt=""
                src={imageDimensionCode3}
              />
            </button> */}
          </nav>
        </div>
        {/* Render the login component as a modal if showLogin is true */}
        {showLogin && (
          <LoginPage
            onClose={closeLoginModal}
            openRegisterModal={openRegisterModal}
          />
        )}
        {showRegister && <CreateAccountPage onClose={closeRegisterModal} />}
      </header>
    </>
  );
}

export default Header;
