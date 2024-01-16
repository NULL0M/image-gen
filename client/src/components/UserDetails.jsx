// image-gen/client/src/components/UserDetails.jsx
import './UserDetails.scss';

const UserDetails = () => {
  return (
    <div className='aboutmeuser'>
      <div className='userdata'>
        <div className='user-name-parent'>
          <label className='user-name'>User Name</label>
          <span className='user-name-wrapper'>
            <input className='user-name1' placeholder='User Name' type='text' />
          </span>
          <label className='user-name'>Email</label>
          <span className='user-name-wrapper'>
            <input className='user-name1' placeholder='Email' type='text' />
          </span>
          <label className='user-name'>Password</label>
          <span className='user-name-wrapper'>
            <input className='user-name1' placeholder='Password' type='text' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
