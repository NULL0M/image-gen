//image-gen/client/src/contexts/globalContext.jsx
import { useState } from 'react';
import { MyContext } from './context';

export default function Container({ children }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('userphotos');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);

  const closeModal = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    closeModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const contextValues = {
    showRegister,
    showLogin,
    showPassword,
    setShowPassword,
    setShowRegister,
    setShowLogin,
    closeModal,
    selectedComponent,
    setSelectedComponent,
    user,
    setUser,
    handleLogout,
    togglePasswordVisibility,
    post,
    setPost,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
