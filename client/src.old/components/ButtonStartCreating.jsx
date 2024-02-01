// src/components/ButtonStartCreating.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/context';
import './ButtonStartCreating.scss';

// React component for the ButtonStartCreating.
export const ButtonStartCreating = () => {
  const { user, setShowLogin } = useContext(MyContext);

  const handleClick = () => {
    if (user) {
      // Se o usuário estiver logado, redirecione para '/createpost'
      window.location.href = '/createpost';
    } else {
      // Se o usuário não estiver logado, exiba o LoginPage
      setShowLogin(true);
    }
  };

  // Rendering the ButtonStartCreating component with a link to the createpost route.
  return (
    // Container for the button, utilizing the "buttonstartcreating" CSS class for styling.
    <div className='buttonstartcreating'>
      {/* Ao clicar no link, verifique o estado do usuário e redirecione conforme necessário */}
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
