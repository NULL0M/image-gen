// src/components/ButtonStartCreating.jsx
import React, { useContext } from 'react';
import { MyContext } from '../contexts/context';
import './ButtonStartCreating.scss';

// React component for the ButtonStartCreating.
export const ButtonStartCreating = () => {
  const { user, setShowLogin } = useContext(MyContext);

  const handleClick = () => {
    if (user) {
      // If the user is logged in, redirect to '/createpost'
      window.location.href = '/createpost';
    } else {
      // If the user is not logged in, display the LoginPage
      setShowLogin(true);
    }
  };

  // Rendering the ButtonStartCreating component with a link to the createpost route.
  return (
    // Container for the button, utilizing the "buttonstartcreating" CSS class for styling.
    <div className='buttonstartcreating'>
      {/* On clicking the link, check the user's state and redirect as necessary */}
      <div className='ellipse-group' onClick={handleClick}>
        <div className='frame-inner' />
        <div className='start-creating-for'>{`Start creating for free  -> `}</div>
      </div>

      <h6 className='create-your-digital'>
        Create your digital image here - No credit card required
      </h6>
    </div>
  );
};
