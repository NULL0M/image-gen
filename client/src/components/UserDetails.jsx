// client/src/components/UserDetails.jsx

import { useState, useContext } from 'react';
import { MyContext } from '../contexts/context';
import baseURL from '../config/api';
import './UserDetails.scss';

const UserDetails = ({ _id, prompt, userID, photo, positionInGrid }) => {
  const { user } = useContext(MyContext);

  //Checks if user is null before trying to access its properties
  const initialUserData = {
    username: user?.username || '',
    email: user?.email || '',
    password: user?.password || '',
  };
  // console.log('see the err',initialUserData)
  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseURL}/api/v1/user/users/${userData.username}`
      );
      if (response.ok) {
        const userDataFromServer = await response.json();
        setUserData(userDataFromServer);
      } else {
        const errorData = await response.json();
        alert(`Failed to fetch user data: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Error fetching user data. Please try again.');
    }
  };

  return (
    <div className='aboutmeuser'>
      <div className='userdata'>
        <form onSubmit={handleSubmit}>
          <div className='user-name-parent'>
            <label className='user-name'>User Name</label>
            <span className='user-name-wrapper'>
              <input
                className='user-name1'
                type='text'
                id='user'
                name='user'
                value={userData.username}
                onChange={handleChange}
              />
            </span>
            <label className='user-name'>Email</label>
            <span className='user-name-wrapper'>
              <input
                className='user-name1'
                type='email'
                id='email'
                name='email'
                value={userData.email}
                onChange={handleChange}
              />
            </span>
            <label className='user-name'>Password</label>
            <span className='user-name-wrapper'>
              <input
                className='user-name1'
                value={userData.password}
                onChange={handleChange}
                type='password'
                id='password'
                name='password'
                placeholder='Password'
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
