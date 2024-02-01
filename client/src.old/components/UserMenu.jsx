import { IoPerson } from 'react-icons/io5';
import { IoMdPhotos } from 'react-icons/io';
import { useEffect } from 'react';
import './UserMenu.scss';

const UserMenu = ({ setSelectedComponent }) => {
  useEffect(() => {
    let marker = document.getElementById('marker');
    let list = document.querySelectorAll('.usermenu .userlibrary');

    // Function to move the indicator
    function moveIndicator(index) {
      let selectedLink = list[index];
      marker.style.left = selectedLink.offsetLeft + 'px';
      marker.style.width = selectedLink.offsetWidth + 'px';
    }

    // Function to activate the clicked link
    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }

    // Event listeners to handle clicks on menu items
    list.forEach((item, index) => {
      item.addEventListener('click', () => {
        moveIndicator(index);
        activeLink.call(item); // Calls the activeLink function with the correct context
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      list.forEach((item) => {
        item.removeEventListener('click', () => {
          moveIndicator(index);
          activeLink.call(item);
        });
      });
    };
  }, []);

  // Handler for menu item clicks
  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <nav className='userNav'>
      <ul className='usermenu'>
        <li
          className='userlibrary active'
          onClick={() => handleMenuClick('userphotos')}>
          <IoMdPhotos className='userIcon' />
          <span className='title'>Photos</span>
        </li>
        <li
          className='userlibrary'
          onClick={() => handleMenuClick('userdetails')}>
          <IoPerson className='userIcon' />
          <span className='title'>Account</span>
        </li>
        <div id='marker'>
          <span className='marker'></span>
        </div>
      </ul>
    </nav>
  );
};

export default UserMenu;
