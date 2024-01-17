//image-gen/client/src/pages/TheProject.scss
import { useContext } from 'react';
import { MyContext } from '../contexts/context';
import Header from '../components/Header';
import UserDetails from '../components/UserDetails';
import UserMenu from '../components/UserMenu';
import UserPhotos from '../components/UserPhotos';

import './UserPage.scss';

// Functional component definition for the UserPage.
const UserPage = () => {
  const { selectedComponent, setSelectedComponent } = useContext(MyContext);

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
              <h2 className='username'>Username</h2>
              <h3 className='email'>Email</h3>
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

      {/* Footer component for maintaining a consistent page layout */}
    </div>
  );
};

export default UserPage;
