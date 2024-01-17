// image-gen/client/src/components/UserMenu.jsx
import { Link } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = ({ setSelectedComponent }) => {
  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <nav className='usermenu'>
      <div
        className='userlibrary'
        onClick={() => handleMenuClick('userphotos')}>
        User Photos
      </div>
      <div className='userabout' onClick={() => handleMenuClick('userdetails')}>
        User Details
      </div>
    </nav>
  );
};

export default UserMenu;
