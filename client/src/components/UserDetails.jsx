// client/src/components/UserDetails.jsx

import React, { useState, useContext } from 'react';
import './UserDetails.scss';
import { MyContext } from '../contexts/context';

const UserDetails = () => {
  const { user, setUser } = useContext(MyContext);

  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
  });

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
        `http://localhost:8090/api/v1/user/users/${userData.username}`
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
                id='username'
                name='username'
                value={userData.username}
                onChange={handleChange}
                // placeholder='User Name'
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
                // placeholder='Email'
              />
            </span>
            <label className='user-name'>Password</label>
            <span className='user-name-wrapper'>
              <input
                className='user-name1'
                type='password'
                id='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
                // placeholder='Password'
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
