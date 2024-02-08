//client/src/pages/UserPage.jsx
import { useContext, useState } from 'react';
import { MyContext } from '../contexts/context';
import Header from '../components/Header';
import UserDetails from '../components/UserDetails';
import UserMenu from '../components/UserMenu';
import UserPhotos from '../components/UserPhotos';

import './UserPage.scss';

const UserPage = () => {
  const { user, selectedComponent, setSelectedComponent } =
    useContext(MyContext);

  const [userData, setUserData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    password: user?.password || '',
  });

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'userphotos':
        return <UserPhotos />;
      case 'userdetails':
        return <UserDetails />;
      default:
        return null;
    }
  };

  return (
    <div className='userpage'>
      <main className='main'>
        <Header />
        <section className='usercontainer'>
          <section className='userprofile'>
            <img className='userphoto-icon' alt='' src='/userphoto@2x.png' />
            <div className='useridentification'>
              {user ? (
                <>
                  <h2 className='user'>{userData.username}</h2>
                  <h3 className='email'>{userData.email}</h3>
                </>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </section>
          <section className='usercontent'>
            <UserMenu setSelectedComponent={setSelectedComponent} />
            <section className='userlibrarycontainer'>
              {renderSelectedComponent()}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default UserPage;
