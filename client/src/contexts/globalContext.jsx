//image-gen/client/src/contexts/globalContext.jsx
import { useContext, useState } from 'react';
import { MyContext } from './context';

export default function Container({ children }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('userphotos');

  const [user, setUser] = useState(null);

  const closeModal = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    closeModal();
  };

  const contextValues = {
    showRegister,
    showLogin,
    setShowRegister,
    setShowLogin,
    closeModal,
    selectedComponent,
    setSelectedComponent,
    user,
    setUser,
    handleLogout,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
